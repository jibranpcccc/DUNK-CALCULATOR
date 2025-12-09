import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { jumpFatigueCalculatorSchema, type JumpFatigueCalculatorForm } from "@/lib/validation-schemas";
import { Zap, TrendingDown, TrendingUp, Clock, AlertTriangle, Calculator, Target } from "lucide-react";
import SEOPageLayout from "@/components/shared/seo-page-layout";
import { generateCalculatorSchema, generateWebPageSchema, generateFAQSchema, BreadcrumbItem } from "@/lib/seo";

interface FatigueResults {
  fatigueIndex: number;
  fatigueLevel: string;
  performanceDrop: number;
  recoveryTime: number;
  fatigueType: string;
  recommendations: string[];
  trainingAdjustments: string[];
  nextTestTime: string;
}

export default function JumpFatigueCalculator() {
  const [results, setResults] = useState<FatigueResults | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const form = useForm<JumpFatigueCalculatorForm>({
    resolver: zodResolver(jumpFatigueCalculatorSchema),
    defaultValues: {
      activityType: "practice",
      intensityLevel: "moderate",
      restTime: 5,
      bodyWeight: 170,
      age: 20,
      fitnessLevel: "intermediate",
    },
  });

  const breadcrumbs: BreadcrumbItem[] = [
    { name: 'Home', url: '/' },
    { name: 'Calculators', url: '/calculators' },
    { name: 'Jump Fatigue Calculator', url: '/calculators/jump-fatigue-calculator' }
  ];

  const seoData = {
    title: "Jump Fatigue Calculator - Track Recovery & Optimize Performance | Dunk Calculator Pro",
    description: "Professional jump fatigue calculator to track how fatigue affects your vertical jump. Get recovery recommendations, training adjustments, and optimize your jumping performance.",
    keywords: "jump fatigue calculator, vertical jump fatigue, basketball recovery, jump recovery time, fatigue index, training fatigue, athletic performance recovery",
    canonicalUrl: `${window.location.origin}/calculators/jump-fatigue-calculator`,
    ogTitle: "Jump Fatigue Calculator - Track Recovery & Optimize Performance",
    ogDescription: "Track how fatigue affects your jumping performance and get personalized recovery recommendations.",
    twitterTitle: "Jump Fatigue Calculator - Track Recovery & Optimize Performance",
    twitterDescription: "Calculate your jump fatigue index and get recovery recommendations for optimal training adaptation.",
    twitterCard: "summary_large_image" as const,
    structuredData: [
      generateCalculatorSchema(
        "Jump Fatigue Calculator",
        "Professional calculator that tracks how fatigue affects vertical jump performance. Compares rested vs fatigued jump heights to calculate fatigue index and provide recovery recommendations.",
        `${window.location.origin}/calculators/jump-fatigue-calculator`,
        ["Rested Jump Height", "Fatigued Jump Height", "Activity Type", "Duration", "Intensity Level", "Fitness Level"],
        ["Fatigue Index", "Performance Drop", "Recovery Time", "Fatigue Type", "Training Adjustments"]
      ),
      generateWebPageSchema(
        "Jump Fatigue Calculator - Track Recovery & Optimize Performance",
        "Professional jump fatigue calculator to track how fatigue affects your vertical jump and get recovery recommendations.",
        `${window.location.origin}/calculators/jump-fatigue-calculator`
      ),
      generateFAQSchema([
        {
          question: "What is a good fatigue index for athletes?",
          answer: "A fatigue index below 10% indicates excellent fatigue resistance. 10-15% is normal for most training sessions. Above 20% suggests you may need additional recovery time before your next high-intensity session."
        },
        {
          question: "How long should I rest between jump training sessions?",
          answer: "Most athletes need 48-72 hours between high-intensity plyometric sessions. The calculator provides personalized recovery time based on your fatigue levels and fitness level."
        },
        {
          question: "Why does my jump height decrease during games?",
          answer: "Jump fatigue is a combination of neuromuscular fatigue (nervous system) and metabolic fatigue (energy depletion). Both reduce your explosive power output, resulting in lower jump heights as activity continues."
        }
      ])
    ]
  };

  const calculateFatigue = (data: JumpFatigueCalculatorForm) => {
    setIsCalculating(true);

    setTimeout(() => {
      const performanceDrop = ((data.restingJump - data.fatigueJump) / data.restingJump) * 100;
      const fatigueIndex = Math.min(100, Math.max(0, performanceDrop));

      let fatigueLevel = "";
      if (fatigueIndex < 5) fatigueLevel = "Minimal Fatigue - Excellent recovery";
      else if (fatigueIndex < 10) fatigueLevel = "Low Fatigue - Good conditioning";
      else if (fatigueIndex < 15) fatigueLevel = "Moderate Fatigue - Normal response";
      else if (fatigueIndex < 25) fatigueLevel = "High Fatigue - Needs attention";
      else fatigueLevel = "Severe Fatigue - Recovery required";

      let baseRecovery = fatigueIndex * 0.8;
      const intensityModifiers = { low: 0.7, moderate: 1.0, high: 1.3, maximal: 1.6 };
      baseRecovery *= intensityModifiers[data.intensityLevel];

      if (data.durationMinutes > 120) baseRecovery *= 1.2;
      else if (data.durationMinutes < 30) baseRecovery *= 0.8;

      const fitnessModifiers = { beginner: 1.4, intermediate: 1.0, advanced: 0.8, elite: 0.6 };
      baseRecovery *= fitnessModifiers[data.fitnessLevel || "intermediate"];

      const recoveryTime = Math.round(baseRecovery);

      let fatigueType = "";
      if (data.durationMinutes < 45 && data.intensityLevel === "maximal") {
        fatigueType = "Neuromuscular Fatigue - High intensity, short duration";
      } else if (data.durationMinutes > 90) {
        fatigueType = "Metabolic Fatigue - Extended activity duration";
      } else if (fatigueIndex > 20) {
        fatigueType = "Combined Fatigue - Both neuromuscular and metabolic";
      } else {
        fatigueType = "Mild Fatigue - Normal training response";
      }

      const recommendations = [];
      if (fatigueIndex < 10) {
        recommendations.push("Excellent fatigue resistance - maintain current training load");
        recommendations.push("Consider increasing training intensity for continued adaptation");
        recommendations.push("Focus on skill development during low fatigue periods");
      } else if (fatigueIndex < 20) {
        recommendations.push("Normal fatigue response - monitor recovery closely");
        recommendations.push("Ensure adequate rest between high-intensity sessions");
        recommendations.push("Consider light active recovery activities");
      } else if (fatigueIndex < 30) {
        recommendations.push("Elevated fatigue - reduce training volume temporarily");
        recommendations.push("Focus on recovery protocols (sleep, nutrition, hydration)");
        recommendations.push("Incorporate more rest days into training schedule");
      } else {
        recommendations.push("High fatigue levels - immediate recovery focus needed");
        recommendations.push("Consider 24-48 hour complete rest period");
        recommendations.push("Evaluate training program for overreaching signs");
      }

      const trainingAdjustments = [];
      if (fatigueIndex > 15) {
        trainingAdjustments.push("Reduce plyometric volume by 30-50%");
        trainingAdjustments.push("Increase rest periods between sets");
        trainingAdjustments.push("Focus on technique rather than intensity");
      } else {
        trainingAdjustments.push("Current training load appears appropriate");
        trainingAdjustments.push("Can maintain or slightly increase volume");
        trainingAdjustments.push("Good recovery between sessions");
      }

      const nextTestTime = new Date();
      nextTestTime.setHours(nextTestTime.getHours() + recoveryTime);

      setResults({
        fatigueIndex: Math.round(fatigueIndex * 10) / 10,
        fatigueLevel,
        performanceDrop: Math.round(performanceDrop * 10) / 10,
        recoveryTime,
        fatigueType,
        recommendations,
        trainingAdjustments,
        nextTestTime: nextTestTime.toLocaleString(),
      });

      setIsCalculating(false);
    }, 800);
  };

  return (
    <SEOPageLayout seoData={seoData} breadcrumbs={breadcrumbs} currentPage="Jump Fatigue Calculator" className="bg-gradient-to-br from-red-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-red-100 rounded-full">
              <Zap className="w-8 h-8 text-red-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Jump Fatigue Calculator
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Track how fatigue affects your jumping performance and get recovery recommendations for optimal training adaptation.
          </p>
        </div>

        {/* Quick Tips Section */}
        <div className="grid md:grid-cols-3 gap-4 mb-10">
          <Card className="bg-gradient-to-br from-red-50 to-orange-50 border-red-200">
            <CardContent className="pt-6">
              <div className="flex items-start">
                <AlertTriangle className="w-5 h-5 text-red-500 mr-3 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">What is Jump Fatigue?</h3>
                  <p className="text-sm text-gray-600">The decrease in vertical jump height after training or competition due to muscle fatigue and nervous system depletion.</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
            <CardContent className="pt-6">
              <div className="flex items-start">
                <Clock className="w-5 h-5 text-blue-500 mr-3 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">When to Test</h3>
                  <p className="text-sm text-gray-600">Test your rested jump in the morning after 48+ hours rest. Test fatigued jump immediately after training.</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
            <CardContent className="pt-6">
              <div className="flex items-start">
                <TrendingUp className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Normal Fatigue</h3>
                  <p className="text-sm text-gray-600">10-15% decrease is normal after intense training. Over 25% indicates you may need more recovery.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Fatigue Index Reference */}
        <Card className="mb-10 bg-white/80 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Fatigue Index Reference Guide</CardTitle>
            <CardDescription>Understand what your fatigue percentage means</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2 px-3">Fatigue Index</th>
                    <th className="text-left py-2 px-3">Level</th>
                    <th className="text-left py-2 px-3">Recovery Time</th>
                    <th className="text-left py-2 px-3">Recommendation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b bg-green-50">
                    <td className="py-2 px-3 font-medium text-green-700">0-10%</td>
                    <td className="py-2 px-3">Minimal</td>
                    <td className="py-2 px-3">24 hours</td>
                    <td className="py-2 px-3">Ready for next session</td>
                  </tr>
                  <tr className="border-b bg-yellow-50">
                    <td className="py-2 px-3 font-medium text-yellow-700">10-20%</td>
                    <td className="py-2 px-3">Moderate</td>
                    <td className="py-2 px-3">24-48 hours</td>
                    <td className="py-2 px-3">Light active recovery</td>
                  </tr>
                  <tr className="border-b bg-orange-50">
                    <td className="py-2 px-3 font-medium text-orange-700">20-30%</td>
                    <td className="py-2 px-3">Significant</td>
                    <td className="py-2 px-3">48-72 hours</td>
                    <td className="py-2 px-3">Rest and recovery focus</td>
                  </tr>
                  <tr className="bg-red-50">
                    <td className="py-2 px-3 font-medium text-red-700">30%+</td>
                    <td className="py-2 px-3">Severe</td>
                    <td className="py-2 px-3">72+ hours</td>
                    <td className="py-2 px-3">Complete rest, evaluate program</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingDown className="w-5 h-5 text-red-600" />
                <span>Fatigue Analysis</span>
              </CardTitle>
              <CardDescription>
                Compare your rested vs fatigued jump performance to analyze fatigue impact and recovery needs.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(calculateFatigue)} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="restingJump"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Rested Jump (inches)</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              placeholder="28"
                              {...field}
                              onChange={(e) => field.onChange(parseFloat(e.target.value) || 0)}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="fatigueJump"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Fatigued Jump (inches)</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              placeholder="24"
                              {...field}
                              onChange={(e) => field.onChange(parseFloat(e.target.value) || 0)}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="activityType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Activity Type</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select activity" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="practice">Practice</SelectItem>
                              <SelectItem value="game">Game</SelectItem>
                              <SelectItem value="training">Training</SelectItem>
                              <SelectItem value="testing">Testing</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="durationMinutes"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Duration (minutes)</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              placeholder="90"
                              {...field}
                              onChange={(e) => field.onChange(parseFloat(e.target.value) || 0)}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="intensityLevel"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Intensity Level</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select intensity" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="low">Low (Recovery)</SelectItem>
                              <SelectItem value="moderate">Moderate (Training)</SelectItem>
                              <SelectItem value="high">High (Competition)</SelectItem>
                              <SelectItem value="maximal">Maximal (Testing)</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="fitnessLevel"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Fitness Level</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select level" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="beginner">Beginner</SelectItem>
                              <SelectItem value="intermediate">Intermediate</SelectItem>
                              <SelectItem value="advanced">Advanced</SelectItem>
                              <SelectItem value="elite">Elite</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700"
                    disabled={isCalculating}
                  >
                    {isCalculating ? "Analyzing..." : "Analyze Fatigue"}
                    <Zap className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {results && (
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <AlertTriangle className="w-5 h-5 text-orange-600" />
                  <span>Fatigue Analysis Results</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="text-center p-6 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-lg">
                    <div className="text-3xl font-bold">{results.fatigueIndex}%</div>
                    <div className="text-sm opacity-90">Fatigue Index</div>
                    <div className="text-sm mt-2">{results.fatigueLevel}</div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-gray-900">{results.performanceDrop}%</div>
                      <div className="text-sm text-gray-600">Performance Drop</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-gray-900">{results.recoveryTime}h</div>
                      <div className="text-sm text-gray-600">Recovery Time</div>
                    </div>
                  </div>

                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-900 mb-2">Fatigue Type</h4>
                    <p className="text-orange-800">{results.fatigueType}</p>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Recommendations</h4>
                    <ul className="text-blue-800 space-y-1">
                      {results.recommendations.map((rec, index) => (
                        <li key={index} className="text-sm">• {rec}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-2">Training Adjustments</h4>
                    <ul className="text-green-800 space-y-1">
                      {results.trainingAdjustments.map((adj, index) => (
                        <li key={index} className="text-sm">• {adj}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-900 mb-2">Next Test</h4>
                    <p className="text-purple-800">{results.nextTestTime}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Related Calculators */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Related Calculators</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/calculators/vertical-jump-calculator">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <TrendingDown className="w-5 h-5 mr-2 text-blue-600" />
                    Vertical Jump Calculator
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Measure and track your vertical jump height with multiple calculation methods.</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/calculators/ideal-body-weight-jump-calculator">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <Target className="w-5 h-5 mr-2 text-green-600" />
                    Body Weight Calculator
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Find your optimal body weight for maximum jumping performance.</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/vertical-jump-training">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <Zap className="w-5 h-5 mr-2 text-orange-600" />
                    Training Programs
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Science-backed programs to improve your vertical jump and reduce fatigue.</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </SEOPageLayout>
  );
}