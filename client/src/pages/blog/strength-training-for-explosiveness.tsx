import { Link } from "wouter";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Dumbbell,
    TrendingUp,
    Target,
    Clock,
    CheckCircle,
    AlertTriangle,
    Zap,
    Activity
} from "lucide-react";
import SEOPageLayout from "@/components/shared/seo-page-layout";
import { generateArticleSchema, generateWebPageSchema, generateFAQSchema, BreadcrumbItem } from "@/lib/seo";

export default function StrengthTrainingForExplosiveness() {
    const breadcrumbs: BreadcrumbItem[] = [
        { name: "Home", url: "/" },
        { name: "Blog", url: "/blog" },
        { name: "Strength Training for Explosiveness", url: "/blog/strength-training-for-explosiveness" }
    ];

    const seoData = {
        title: "Strength Training for Explosive Vertical Jump Power | Dunk Calculator Pro",
        description: "Learn the best strength training exercises and programs to develop explosive power for higher vertical jumps. Includes squat variations, deadlifts, and Olympic lifts.",
        keywords: "strength training vertical jump, explosive power exercises, squat for jumping, deadlift vertical jump, Olympic lifts basketball",
        canonicalUrl: `${window.location.origin}/blog/strength-training-for-explosiveness`,
        ogTitle: "Strength Training for Explosive Vertical Jump Power",
        ogDescription: "Build explosive power with proven strength training exercises for higher jumps.",
        twitterTitle: "Strength Training for Explosiveness - Vertical Jump Guide",
        twitterDescription: "Master the strength exercises that build explosive jumping power.",
        twitterCard: "summary_large_image" as const,
        structuredData: [
            generateArticleSchema(
                "Strength Training for Explosive Vertical Jump Power",
                "Comprehensive guide to strength training exercises and programs for developing explosive vertical jump power.",
                new Date().toISOString(),
                new Date().toISOString(),
                "Dunk Calculator Pro Team",
                `${window.location.origin}/blog/strength-training-for-explosiveness`
            ),
            generateWebPageSchema(
                "Strength Training for Explosiveness",
                "Learn the best strength training exercises to develop explosive power for higher vertical jumps.",
                `${window.location.origin}/blog/strength-training-for-explosiveness`
            ),
            generateFAQSchema([
                {
                    question: "How do squats improve vertical jump?",
                    answer: "Squats build strength in the quadriceps, glutes, and hamstrings - the primary muscles used in jumping. Stronger muscles can produce more force, directly translating to higher jumps."
                },
                {
                    question: "Should I do heavy or light weights for jump training?",
                    answer: "Both! Heavy weights (85%+ 1RM) build maximal strength, while lighter weights moved quickly (40-60% 1RM) develop rate of force development. A periodized program includes both."
                },
                {
                    question: "How often should I strength train for vertical jump?",
                    answer: "2-3 strength sessions per week is optimal. Allow 48-72 hours between heavy leg sessions for proper recovery. Quality over quantity is key."
                }
            ])
        ]
    };

    const exercises = [
        {
            name: "Back Squat",
            sets: "4-5",
            reps: "3-6",
            benefit: "Primary leg strength builder",
            icon: Dumbbell,
            tips: "Focus on depth and explosive drive out of the hole"
        },
        {
            name: "Romanian Deadlift",
            sets: "3-4",
            reps: "6-8",
            benefit: "Posterior chain power",
            icon: Activity,
            tips: "Maintain tension throughout the movement"
        },
        {
            name: "Trap Bar Deadlift",
            sets: "4-5",
            reps: "3-5",
            benefit: "Total body explosive strength",
            icon: Zap,
            tips: "Drive through heels and accelerate the bar"
        },
        {
            name: "Bulgarian Split Squat",
            sets: "3",
            reps: "6-8 each leg",
            benefit: "Single-leg strength and balance",
            icon: Target,
            tips: "Keep front knee tracking over toes"
        },
        {
            name: "Power Clean",
            sets: "4-5",
            reps: "2-3",
            benefit: "Rate of force development",
            icon: TrendingUp,
            tips: "Focus on triple extension of ankles, knees, hips"
        },
        {
            name: "Hip Thrust",
            sets: "3-4",
            reps: "8-12",
            benefit: "Glute activation and power",
            icon: CheckCircle,
            tips: "Squeeze glutes hard at the top"
        }
    ];

    return (
        <SEOPageLayout seoData={seoData} breadcrumbs={breadcrumbs} currentPage="Blog" className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-red-600 to-orange-600 text-white py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm mb-6">
                        <Dumbbell className="w-4 h-4 mr-2" />
                        Strength Training Guide
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Strength Training for Explosive Vertical Jump Power
                    </h1>
                    <p className="text-xl text-white/90 max-w-3xl mx-auto">
                        Build the foundation of explosive power with proven strength training principles. Learn which exercises, rep ranges, and programming strategies maximize your vertical jump.
                    </p>
                </div>
            </section>

            {/* Article Content */}
            <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                {/* Introduction */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Strength Training Matters for Jumping</h2>
                    <p className="text-lg text-gray-700 mb-4">
                        Vertical jump performance is fundamentally about how much force you can produce and how quickly you can produce it. While plyometrics develop the "speed" component, strength training builds the raw force capacity that serves as the foundation for explosive power.
                    </p>
                    <p className="text-lg text-gray-700 mb-4">
                        Research consistently shows that athletes with higher relative strength (strength compared to body weight) tend to jump higher. A stronger muscle has more potential to generate force, which translates directly to propelling your body higher off the ground.
                    </p>
                    <Card className="bg-blue-50 border-blue-200 my-6">
                        <CardContent className="p-6">
                            <h3 className="font-bold text-blue-900 mb-2">The Force-Velocity Relationship</h3>
                            <p className="text-blue-800">
                                Jumping requires producing maximum force in minimal time (typically 0.2-0.4 seconds). Strength training increases your force ceiling, while plyometrics help you access that strength quickly. Both are essential.
                            </p>
                        </CardContent>
                    </Card>
                </section>

                {/* Key Exercises */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Essential Strength Exercises for Vertical Jump</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {exercises.map((exercise, index) => (
                            <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                                <CardHeader className="pb-3">
                                    <CardTitle className="text-lg flex items-center">
                                        <exercise.icon className="w-5 h-5 mr-2 text-orange-600" />
                                        {exercise.name}
                                    </CardTitle>
                                    <CardDescription>{exercise.benefit}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex gap-4 mb-3">
                                        <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">{exercise.sets} sets</span>
                                        <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">{exercise.reps} reps</span>
                                    </div>
                                    <p className="text-sm text-gray-600">
                                        <strong>Tip:</strong> {exercise.tips}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* Programming Principles */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Programming Principles for Jump Training</h2>

                    <div className="space-y-6">
                        <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
                            <CardHeader>
                                <CardTitle className="text-green-800">Phase 1: Anatomical Adaptation (Weeks 1-4)</CardTitle>
                            </CardHeader>
                            <CardContent className="text-green-900">
                                <ul className="space-y-2">
                                    <li>• Higher reps (10-15) with moderate weight</li>
                                    <li>• Focus on movement quality and muscle endurance</li>
                                    <li>• Prepare tissues for heavier loading</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
                            <CardHeader>
                                <CardTitle className="text-blue-800">Phase 2: Strength Building (Weeks 5-10)</CardTitle>
                            </CardHeader>
                            <CardContent className="text-blue-900">
                                <ul className="space-y-2">
                                    <li>• Lower reps (4-6) with heavy weight (80-90% 1RM)</li>
                                    <li>• Focus on progressive overload</li>
                                    <li>• Build maximal strength foundation</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="bg-gradient-to-r from-orange-50 to-red-50 border-orange-200">
                            <CardHeader>
                                <CardTitle className="text-orange-800">Phase 3: Power Conversion (Weeks 11-16)</CardTitle>
                            </CardHeader>
                            <CardContent className="text-orange-900">
                                <ul className="space-y-2">
                                    <li>• Mix of heavy and explosive work</li>
                                    <li>• Add Olympic lifts and jump squats</li>
                                    <li>• Convert strength to explosive power</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Sample Workout */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Sample Strength Workout for Jumpers</h2>
                    <Card className="bg-white">
                        <CardHeader>
                            <CardTitle>Lower Body Power Day</CardTitle>
                            <CardDescription>Complete 2x per week with 48-72 hours rest between sessions</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="border-b bg-gray-50">
                                            <th className="text-left py-3 px-4">Exercise</th>
                                            <th className="text-left py-3 px-4">Sets x Reps</th>
                                            <th className="text-left py-3 px-4">Rest</th>
                                            <th className="text-left py-3 px-4">Notes</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b">
                                            <td className="py-3 px-4 font-medium">Power Clean</td>
                                            <td className="py-3 px-4">4 x 3</td>
                                            <td className="py-3 px-4">2-3 min</td>
                                            <td className="py-3 px-4">Explosive, perfect form</td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="py-3 px-4 font-medium">Back Squat</td>
                                            <td className="py-3 px-4">4 x 5</td>
                                            <td className="py-3 px-4">3 min</td>
                                            <td className="py-3 px-4">Heavy, controlled</td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="py-3 px-4 font-medium">Romanian Deadlift</td>
                                            <td className="py-3 px-4">3 x 8</td>
                                            <td className="py-3 px-4">2 min</td>
                                            <td className="py-3 px-4">Hamstring focus</td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="py-3 px-4 font-medium">Bulgarian Split Squat</td>
                                            <td className="py-3 px-4">3 x 6/leg</td>
                                            <td className="py-3 px-4">90 sec</td>
                                            <td className="py-3 px-4">Single leg power</td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 px-4 font-medium">Calf Raises</td>
                                            <td className="py-3 px-4">3 x 15</td>
                                            <td className="py-3 px-4">60 sec</td>
                                            <td className="py-3 px-4">Full ROM</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* Warning Section */}
                <section className="mb-12">
                    <Card className="bg-yellow-50 border-yellow-300">
                        <CardHeader>
                            <CardTitle className="flex items-center text-yellow-800">
                                <AlertTriangle className="w-5 h-5 mr-2" />
                                Important Considerations
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="text-yellow-900">
                            <ul className="space-y-2">
                                <li>• <strong>Progressive overload:</strong> Increase weight gradually (2-5% per week maximum)</li>
                                <li>• <strong>Recovery:</strong> Muscles grow during rest, not during workouts</li>
                                <li>• <strong>Form first:</strong> Never sacrifice technique for heavier weights</li>
                                <li>• <strong>Balance:</strong> Don't neglect plyometrics and sport-specific training</li>
                                <li>• <strong>Nutrition:</strong> Adequate protein (1.6-2.2g/kg) supports strength gains</li>
                            </ul>
                        </CardContent>
                    </Card>
                </section>

                {/* CTA Section */}
                <section className="text-center py-8 bg-gradient-to-r from-orange-100 to-red-100 rounded-2xl">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Track Your Progress</h2>
                    <p className="text-gray-600 mb-6">Use our calculators to measure your vertical jump improvements as you build strength.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/calculators/vertical-jump-calculator">
                            <Button className="bg-orange-600 hover:bg-orange-700">
                                Measure Your Jump
                            </Button>
                        </Link>
                        <Link href="/calculators/max-potential-jump-calculator">
                            <Button variant="outline">
                                Calculate Your Potential
                            </Button>
                        </Link>
                    </div>
                </section>

            </article>
        </SEOPageLayout>
    );
}
