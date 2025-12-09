import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { verticalJumpCalculatorSchema, type VerticalJumpCalculatorForm } from "@/lib/validation-schemas";
import { TrendingUp, ArrowLeft, Calculator, Target } from "lucide-react";
import SEOPageLayout from "@/components/shared/seo-page-layout";
import { generateCalculatorSchema, generateWebPageSchema, generateFAQSchema, BreadcrumbItem } from "@/lib/seo";

interface JumpResults {
  verticalJump: number;
  percentileRank: string;
  powerOutput: number;
  assessment: string;
  recommendations: string[];
}

export default function VerticalJumpCalculator() {
  const [results, setResults] = useState<JumpResults | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const breadcrumbs: BreadcrumbItem[] = [
    { name: 'Home', url: '/' },
    { name: 'Calculators', url: '/calculators' },
    { name: 'Vertical Jump Calculator', url: '/calculators/vertical-jump-calculator' }
  ];

  const seoData = {
    title: "Vertical Jump Calculator - Measure & Track Your Jump Height | Dunk Calculator Pro",
    description: "Professional vertical jump calculator with multiple measurement methods. Calculate your vertical leap, get percentile rankings, power output analysis, and personalized training recommendations.",
    keywords: "vertical jump calculator, vertical leap measurement, jump height calculator, basketball vertical, vertical jump test, jump performance analysis, vertical jump training",
    canonicalUrl: `${window.location.origin}/calculators/vertical-jump-calculator`,
    ogTitle: "Vertical Jump Calculator - Measure & Track Your Jump Height",
    ogDescription: "Professional vertical jump calculator with multiple measurement methods. Get detailed insights and personalized training recommendations.",
    twitterTitle: "Vertical Jump Calculator - Measure & Track Your Jump Height",
    twitterDescription: "Calculate your vertical leap with professional accuracy. Multiple methods, detailed analysis, training recommendations.",
    twitterCard: "summary_large_image" as const,
    structuredData: [
      generateCalculatorSchema(
        "Vertical Jump Calculator",
        "Professional vertical jump calculator with multiple measurement methods including hang time, reach difference, and jump mat measurements. Provides percentile rankings, power output analysis, and personalized training recommendations.",
        `${window.location.origin}/calculators/vertical-jump-calculator`,
        ["Jump Method", "Hang Time", "Reach Difference", "Body Weight", "Age", "Gender"],
        ["Vertical Jump Height", "Percentile Rank", "Power Output", "Performance Assessment", "Training Recommendations"]
      ),
      generateWebPageSchema(
        "Vertical Jump Calculator - Measure & Track Your Jump Height",
        "Professional vertical jump calculator with multiple measurement methods. Calculate your vertical leap, get percentile rankings, power output analysis, and personalized training recommendations.",
        `${window.location.origin}/calculators/vertical-jump-calculator`
      ),
      generateFAQSchema([
        {
          question: "What is a good vertical jump height?",
          answer: "For men, 16-20 inches is average, 20-24 inches is above average, and 28+ inches is excellent. NBA players average 28-32 inches. For women, subtract about 4-6 inches from each category."
        },
        {
          question: "How can I increase my vertical jump?",
          answer: "Focus on plyometric exercises (box jumps, depth jumps), strength training (squats, deadlifts), and proper technique. Most people can add 4-8 inches with 8-12 weeks of dedicated training."
        },
        {
          question: "What muscles are used in vertical jumping?",
          answer: "The primary muscles are quadriceps, glutes, hamstrings, and calves. Core muscles stabilize the body, while hip flexors help bring knees up. Fast-twitch muscle fibers are especially important for explosive jumping."
        }
      ])
    ]
  };

  const form = useForm<VerticalJumpCalculatorForm>({
    resolver: zodResolver(verticalJumpCalculatorSchema),
    defaultValues: {
      jumpMethod: "hangTime",
      bodyWeight: 170,
      age: 20,
    },
  });

  const watchMethod = form.watch("jumpMethod");

  const calculateVerticalJump = (data: VerticalJumpCalculatorForm) => {
    setIsCalculating(true);

    setTimeout(() => {
      let verticalJump = 0;

      // Calculate based on method
      if (data.jumpMethod === "hangTime" && data.hangTime) {
        // Formula: h = (g * t²) / 8, where t is hang time
        const gravity = 32.174; // ft/s²
        const heightFeet = (gravity * data.hangTime * data.hangTime) / 8;
        verticalJump = heightFeet * 12; // Convert to inches
      } else if (data.jumpMethod === "reachHeight" && data.maxReach && data.standingReach) {
        verticalJump = data.maxReach - data.standingReach;
      } else if (data.jumpMethod === "measurement" && data.directMeasurement) {
        verticalJump = data.directMeasurement;
      }

      // Calculate percentile rank
      let percentileRank = "";
      if (verticalJump < 16) percentileRank = "Below Average (0-25th percentile)";
      else if (verticalJump < 20) percentileRank = "Average (25-50th percentile)";
      else if (verticalJump < 24) percentileRank = "Above Average (50-75th percentile)";
      else if (verticalJump < 28) percentileRank = "Good (75-90th percentile)";
      else if (verticalJump < 32) percentileRank = "Very Good (90-95th percentile)";
      else percentileRank = "Excellent (95th+ percentile)";

      // Calculate power output
      const weight = data.bodyWeight || 170;
      const powerOutput = Math.round((weight * verticalJump * 0.6) + 200);

      // Generate assessment
      let assessment = "";
      if (verticalJump < 16) {
        assessment = "Focus on foundational strength training and basic plyometrics. You have significant room for improvement.";
      } else if (verticalJump < 24) {
        assessment = "You have a solid foundation. Structured training can help you reach the next level.";
      } else if (verticalJump < 32) {
        assessment = "You have good jumping ability. Advanced training techniques can help you optimize performance.";
      } else {
        assessment = "Excellent jumping ability! You're in the elite category. Focus on maintaining and fine-tuning.";
      }

      // Generate recommendations
      const recommendations = [];
      if (verticalJump < 20) {
        recommendations.push("Start with bodyweight squats and lunges");
        recommendations.push("Add basic jumping drills 2-3x per week");
        recommendations.push("Focus on landing mechanics and form");
      } else if (verticalJump < 28) {
        recommendations.push("Incorporate weighted squats and deadlifts");
        recommendations.push("Add depth jumps and box jumps");
        recommendations.push("Work on single-leg strength exercises");
      } else {
        recommendations.push("Focus on explosive Olympic lifts");
        recommendations.push("Advanced plyometric combinations");
        recommendations.push("Sport-specific jump training");
      }

      setResults({
        verticalJump: Math.round(verticalJump * 10) / 10,
        percentileRank,
        powerOutput,
        assessment,
        recommendations,
      });

      setIsCalculating(false);
    }, 800);
  };

  return (
    <SEOPageLayout seoData={seoData} breadcrumbs={breadcrumbs} currentPage="Vertical Jump Calculator" className="bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-blue-100 rounded-full">
              <TrendingUp className="w-8 h-8 text-blue-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Vertical Jump Calculator
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Measure and analyze your vertical jump performance with multiple calculation methods.
            Get detailed insights and personalized training recommendations.
          </p>
        </div>

        {/* Measurement Guide Infographic */}
        <div className="mb-12 max-w-2xl mx-auto">
          <Card className="overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3">
              <CardTitle className="text-lg text-center">How to Measure Your Vertical Jump</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <img
                src="/images/vertical-jump-measurement.png"
                alt="Step-by-step infographic showing how to measure vertical jump height using the wall test method"
                className="w-full h-auto"
                loading="lazy"
              />
            </CardContent>
          </Card>
          <p className="text-center text-sm text-gray-500 mt-2">
            <Link href="/guides/how-to-measure-vertical-jump" className="text-blue-600 hover:underline">
              View detailed measurement guide →
            </Link>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Calculator Form */}
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calculator className="w-5 h-5 text-blue-600" />
                <span>How to Use</span>
              </CardTitle>
              <CardDescription>
                Choose your measurement method and enter your data for accurate vertical jump analysis.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(calculateVerticalJump)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="jumpMethod"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Measurement Method</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select measurement method" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="hangTime">Hang Time Method</SelectItem>
                            <SelectItem value="reachHeight">Standing vs Max Reach</SelectItem>
                            <SelectItem value="measurement">Direct Measurement</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {watchMethod === "hangTime" && (
                    <FormField
                      control={form.control}
                      name="hangTime"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Hang Time (seconds)</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              step="0.01"
                              placeholder="0.65"
                              {...field}
                              onChange={(e) => field.onChange(parseFloat(e.target.value))}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}

                  {watchMethod === "reachHeight" && (
                    <>
                      <FormField
                        control={form.control}
                        name="standingReach"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Standing Reach (inches)</FormLabel>
                            <FormControl>
                              <Input
                                type="number"
                                placeholder="96"
                                {...field}
                                onChange={(e) => field.onChange(parseFloat(e.target.value))}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="maxReach"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Maximum Jump Reach (inches)</FormLabel>
                            <FormControl>
                              <Input
                                type="number"
                                placeholder="116"
                                {...field}
                                onChange={(e) => field.onChange(parseFloat(e.target.value))}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </>
                  )}

                  {watchMethod === "measurement" && (
                    <FormField
                      control={form.control}
                      name="directMeasurement"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Vertical Jump (inches)</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              placeholder="24"
                              {...field}
                              onChange={(e) => field.onChange(parseFloat(e.target.value))}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}

                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="bodyWeight"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Body Weight (lbs)</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              placeholder="170"
                              {...field}
                              onChange={(e) => field.onChange(parseFloat(e.target.value))}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="age"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Age</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              placeholder="20"
                              {...field}
                              onChange={(e) => field.onChange(parseFloat(e.target.value))}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    disabled={isCalculating}
                  >
                    {isCalculating ? "Calculating..." : "Analyze Jump Performance"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {/* Results */}
          {results && (
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="w-5 h-5 text-green-600" />
                  <span>Your Results</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">{results.verticalJump}"</div>
                    <div className="text-sm text-gray-600">Vertical Jump</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">{results.powerOutput}W</div>
                    <div className="text-sm text-gray-600">Power Output</div>
                  </div>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Performance Rank</h3>
                  <p className="text-gray-700">{results.percentileRank}</p>
                </div>

                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Assessment</h3>
                  <p className="text-gray-700">{results.assessment}</p>
                </div>

                <div className="p-4 bg-green-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">Training Recommendations</h3>
                  <ul className="space-y-2">
                    {results.recommendations.map((rec, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-gray-700">{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t">
                  <Link href="/vertical-jump-training">
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      Get Training Program
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* What Your Result Means Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">What Your Result Means</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Vertical Jump Ranges</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span>Below 16":</span><span className="text-red-600">Needs Improvement</span></div>
                  <div className="flex justify-between"><span>16-20":</span><span className="text-yellow-600">Average</span></div>
                  <div className="flex justify-between"><span>20-24":</span><span className="text-blue-600">Above Average</span></div>
                  <div className="flex justify-between"><span>24-28":</span><span className="text-green-600">Good</span></div>
                  <div className="flex justify-between"><span>28-32":</span><span className="text-purple-600">Very Good</span></div>
                  <div className="flex justify-between"><span>32+":</span><span className="text-orange-600">Elite</span></div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Improve Your Score</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Strengthen your legs with squats and deadlifts</li>
                  <li>• Practice explosive movements like jump squats</li>
                  <li>• Improve landing mechanics for injury prevention</li>
                  <li>• Add plyometric exercises to your routine</li>
                  <li>• Focus on single-leg strength and stability</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Related Calculators */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Related Calculators</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/calculators/standing-reach-calculator">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <Target className="w-5 h-5 mr-2 text-green-600" />
                    Standing Reach Calculator
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Calculate your standing reach for accurate dunk requirements.</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/calculators/jump-fatigue-calculator">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <Calculator className="w-5 h-5 mr-2 text-red-600" />
                    Jump Fatigue Calculator
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Track how fatigue affects your jumping performance.</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/calculators/max-potential-jump-calculator">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2 text-purple-600" />
                    Max Potential Calculator
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Discover your maximum vertical jump potential.</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </SEOPageLayout>
  );
}