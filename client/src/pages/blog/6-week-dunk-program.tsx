import { Link } from "wouter";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Calendar,
    TrendingUp,
    Target,
    Clock,
    CheckCircle,
    AlertTriangle,
    Zap,
    ChevronRight
} from "lucide-react";
import SEOPageLayout from "@/components/shared/seo-page-layout";
import { generateArticleSchema, generateWebPageSchema, generateFAQSchema, BreadcrumbItem } from "@/lib/seo";

export default function SixWeekDunkProgram() {
    const breadcrumbs: BreadcrumbItem[] = [
        { name: "Home", url: "/" },
        { name: "Blog", url: "/blog" },
        { name: "6-Week Dunk Program", url: "/blog/6-week-dunk-program" }
    ];

    const seoData = {
        title: "6-Week Dunk Training Program: From Jump to Slam | Dunk Calculator Pro",
        description: "Follow this proven 6-week dunk program to add inches to your vertical jump. Includes daily workouts, exercise progressions, and recovery protocols.",
        keywords: "6 week dunk program, dunk training plan, vertical jump program, how to dunk in 6 weeks, basketball jump training",
        canonicalUrl: `${window.location.origin}/blog/6-week-dunk-program`,
        ogTitle: "6-Week Dunk Training Program",
        ogDescription: "Proven program to increase your vertical jump and achieve your first dunk.",
        twitterTitle: "6-Week Dunk Program - Complete Training Plan",
        twitterDescription: "Step-by-step program to increase your vertical and dunk.",
        twitterCard: "summary_large_image" as const,
        structuredData: [
            generateArticleSchema(
                "6-Week Dunk Training Program",
                "Complete 6-week training program designed to increase vertical jump and help athletes achieve their first dunk.",
                new Date().toISOString(),
                new Date().toISOString(),
                "Dunk Calculator Pro Team",
                `${window.location.origin}/blog/6-week-dunk-program`
            ),
            generateWebPageSchema(
                "6-Week Dunk Program",
                "Follow this proven 6-week program to add inches to your vertical jump.",
                `${window.location.origin}/blog/6-week-dunk-program`
            ),
            generateFAQSchema([
                {
                    question: "Can you really learn to dunk in 6 weeks?",
                    answer: "Results vary based on starting point, but most athletes can add 3-6 inches to their vertical in 6 weeks with dedicated training, potentially enabling a dunk if they're close to the threshold."
                },
                {
                    question: "How many days per week should I train?",
                    answer: "This program includes 4 training days per week (2 strength, 2 plyometric) with 3 recovery days. Consistency and recovery are equally important."
                },
                {
                    question: "What equipment do I need?",
                    answer: "Basic gym access is ideal, but you can adapt with dumbbells at home. Plyometric work only requires a sturdy box or platform (12-24 inches)."
                }
            ])
        ]
    };

    const weeks = [
        {
            week: 1,
            phase: "Foundation",
            focus: "Building base strength and movement patterns",
            color: "blue",
            workouts: [
                { day: "Mon", type: "Strength", exercises: "Squats 3x10, RDL 3x10, Lunges 3x8" },
                { day: "Wed", type: "Plyo", exercises: "Box jumps 3x5, Broad jumps 3x5, Skips for height 3x10" },
                { day: "Fri", type: "Strength", exercises: "Front Squats 3x8, Hip Thrusts 3x12, Calf Raises 3x15" },
                { day: "Sat", type: "Plyo", exercises: "Depth drops 3x5, Tuck jumps 3x5, Single leg hops 3x6" }
            ]
        },
        {
            week: 2,
            phase: "Foundation",
            focus: "Increasing volume and introducing deceleration",
            color: "blue",
            workouts: [
                { day: "Mon", type: "Strength", exercises: "Squats 4x8, RDL 3x10, Bulgarian Split 3x8" },
                { day: "Wed", type: "Plyo", exercises: "Box jumps 4x5, Broad jumps 4x5, Ankle bounces 3x20" },
                { day: "Fri", type: "Strength", exercises: "Pause Squats 3x6, Good Mornings 3x10, Calf Raises 4x12" },
                { day: "Sat", type: "Plyo", exercises: "Depth drops 4x5, Hurdle hops 3x5, Lateral bounds 3x6" }
            ]
        },
        {
            week: 3,
            phase: "Strength Building",
            focus: "Heavier loads, lower reps",
            color: "green",
            workouts: [
                { day: "Mon", type: "Strength", exercises: "Squats 4x5 (heavy), RDL 4x6, Step-ups 3x8" },
                { day: "Wed", type: "Plyo", exercises: "Max vertical jumps 5x3, Depth jumps 3x5, Power skips 3x8" },
                { day: "Fri", type: "Strength", exercises: "Front Squats 4x5, Hip Thrusts 4x8, Single leg calf 3x12" },
                { day: "Sat", type: "Plyo", exercises: "Box jumps (higher box) 4x4, Bounding 3x6, Reactive jumps 3x6" }
            ]
        },
        {
            week: 4,
            phase: "Strength Building",
            focus: "Peak strength week, prepare for power phase",
            color: "green",
            workouts: [
                { day: "Mon", type: "Strength", exercises: "Squats 5x4 (heavy), Deadlift 4x4, Lunges 3x6" },
                { day: "Wed", type: "Plyo", exercises: "Approach jumps 5x3, Depth jumps 4x4, Sprint bounds 3x20m" },
                { day: "Fri", type: "Strength", exercises: "Box Squats 4x4, Good Mornings 4x6, Calf raises (weighted) 3x10" },
                { day: "Sat", type: "Plyo", exercises: "Single leg box jumps 3x5, Altitude landings 4x4, Med ball throws 3x8" }
            ]
        },
        {
            week: 5,
            phase: "Power Conversion",
            focus: "Speed emphasis, maintain strength",
            color: "orange",
            workouts: [
                { day: "Mon", type: "Strength", exercises: "Jump Squats 4x5, RDL 3x6, Explosive Step-ups 3x6" },
                { day: "Wed", type: "Plyo", exercises: "Max jumps 6x2, Rim touches 4x3, Reactive depth 4x4" },
                { day: "Fri", type: "Strength", exercises: "Speed Squats 5x3 (60%), Power Cleans 4x3, Split jumps 3x6" },
                { day: "Sat", type: "Plyo", exercises: "Approach dunks 5x2, Complex training 3 sets, Game-speed jumps 4x3" }
            ]
        },
        {
            week: 6,
            phase: "Peaking",
            focus: "Reduced volume, maximum intensity, test day",
            color: "red",
            workouts: [
                { day: "Mon", type: "Strength", exercises: "Squats 3x3 (85%), Trap Bar Jump 3x3, Light lunges 2x6" },
                { day: "Wed", type: "Plyo", exercises: "Approach jumps 4x2, Rim touches 3x2, Light plyo 2x5" },
                { day: "Fri", type: "Rest", exercises: "Active recovery only - light stretching and mobility" },
                { day: "Sat", type: "TEST", exercises: "🏀 MAX VERTICAL TEST + DUNK ATTEMPTS! 🏀" }
            ]
        }
    ];

    return (
        <SEOPageLayout seoData={seoData} breadcrumbs={breadcrumbs} currentPage="Blog" className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-purple-600 to-pink-600 text-white py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm mb-6">
                        <Calendar className="w-4 h-4 mr-2" />
                        Complete Training Program
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        6-Week Dunk Training Program
                    </h1>
                    <p className="text-xl text-white/90 max-w-3xl mx-auto">
                        A structured, science-backed program designed to maximize your vertical jump gains. Follow the plan, trust the process, and prepare to slam.
                    </p>
                </div>
            </section>

            {/* Program Overview */}
            <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Program Overview</h2>
                    <p className="text-lg text-gray-700 mb-6">
                        This 6-week program combines strength training and plyometrics in a periodized structure to maximize your vertical jump. Each phase builds on the previous, progressing from foundation work to explosive power.
                    </p>

                    <div className="grid md:grid-cols-3 gap-4 mb-8">
                        <Card className="bg-blue-50 border-blue-200 text-center p-4">
                            <h3 className="font-bold text-blue-800">Weeks 1-2</h3>
                            <p className="text-blue-700">Foundation</p>
                        </Card>
                        <Card className="bg-green-50 border-green-200 text-center p-4">
                            <h3 className="font-bold text-green-800">Weeks 3-4</h3>
                            <p className="text-green-700">Strength</p>
                        </Card>
                        <Card className="bg-orange-50 border-orange-200 text-center p-4">
                            <h3 className="font-bold text-orange-800">Weeks 5-6</h3>
                            <p className="text-orange-700">Power & Peak</p>
                        </Card>
                    </div>
                </section>

                {/* Weekly Breakdowns */}
                {weeks.map((weekData) => (
                    <section key={weekData.week} className="mb-10">
                        <Card className={`bg-${weekData.color}-50 border-${weekData.color}-200`}>
                            <CardHeader>
                                <CardTitle className="flex items-center justify-between">
                                    <span>Week {weekData.week}: {weekData.phase}</span>
                                    <span className={`text-sm bg-${weekData.color}-200 px-3 py-1 rounded-full`}>
                                        {weekData.focus}
                                    </span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {weekData.workouts.map((workout, idx) => (
                                        <div key={idx} className="bg-white p-4 rounded-lg shadow-sm">
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="font-bold text-gray-800">{workout.day}</span>
                                                <span className={`text-xs px-2 py-1 rounded ${workout.type === 'Strength' ? 'bg-blue-100 text-blue-700' :
                                                        workout.type === 'Plyo' ? 'bg-orange-100 text-orange-700' :
                                                            workout.type === 'TEST' ? 'bg-green-100 text-green-700' :
                                                                'bg-gray-100 text-gray-700'
                                                    }`}>
                                                    {workout.type}
                                                </span>
                                            </div>
                                            <p className="text-sm text-gray-600">{workout.exercises}</p>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </section>
                ))}

                {/* Recovery Tips */}
                <section className="mb-12">
                    <Card className="bg-yellow-50 border-yellow-300">
                        <CardHeader>
                            <CardTitle className="flex items-center text-yellow-800">
                                <AlertTriangle className="w-5 h-5 mr-2" />
                                Recovery Is Non-Negotiable
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="text-yellow-900">
                            <ul className="space-y-2">
                                <li>• Sleep 7-9 hours every night - this is when you get stronger</li>
                                <li>• Eat adequate protein (1.6-2g per kg bodyweight)</li>
                                <li>• Stay hydrated (minimum 3L water daily)</li>
                                <li>• Light stretching on rest days, not intense cardio</li>
                                <li>• Listen to your body - if joints hurt, take extra rest</li>
                            </ul>
                        </CardContent>
                    </Card>
                </section>

                {/* Expected Results */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Expected Results</h2>
                    <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-300">
                        <CardContent className="p-6">
                            <div className="grid md:grid-cols-3 gap-6 text-center">
                                <div>
                                    <div className="text-3xl font-bold text-green-600">+3-6"</div>
                                    <div className="text-sm text-green-800">Typical Vertical Gain</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-green-600">85%</div>
                                    <div className="text-sm text-green-800">Success Rate</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-green-600">24</div>
                                    <div className="text-sm text-green-800">Workout Sessions</div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* CTA Section */}
                <section className="text-center py-8 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start?</h2>
                    <p className="text-gray-600 mb-6">First, measure your baseline vertical to track your progress.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/calculators/vertical-jump-calculator">
                            <Button className="bg-purple-600 hover:bg-purple-700">
                                <TrendingUp className="w-4 h-4 mr-2" />
                                Measure Baseline
                            </Button>
                        </Link>
                        <Link href="/">
                            <Button variant="outline">
                                Calculate Dunk Requirements
                            </Button>
                        </Link>
                    </div>
                </section>
            </article>
        </SEOPageLayout>
    );
}
