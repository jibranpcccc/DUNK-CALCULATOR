import { Link } from "wouter";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    AlertTriangle,
    TrendingUp,
    Target,
    CheckCircle,
    XCircle,
    Lightbulb,
    Activity
} from "lucide-react";
import SEOPageLayout from "@/components/shared/seo-page-layout";
import { generateArticleSchema, generateWebPageSchema, generateFAQSchema, BreadcrumbItem } from "@/lib/seo";

export default function CommonVerticalJumpMistakes() {
    const breadcrumbs: BreadcrumbItem[] = [
        { name: "Home", url: "/" },
        { name: "Guides", url: "/guides" },
        { name: "Common Vertical Jump Mistakes", url: "/guides/common-vertical-jump-mistakes" }
    ];

    const seoData = {
        title: "10 Common Vertical Jump Mistakes Killing Your Progress | Dunk Calculator Pro",
        description: "Avoid these critical mistakes that limit your vertical jump gains. Learn what's holding you back and how to fix it for faster progress.",
        keywords: "vertical jump mistakes, why can't I jump higher, jump training errors, vertical jump plateau, how to fix vertical jump",
        canonicalUrl: `${window.location.origin}/guides/common-vertical-jump-mistakes`,
        ogTitle: "10 Common Vertical Jump Mistakes",
        ogDescription: "Stop making these mistakes that limit your vertical jump progress.",
        twitterTitle: "Common Vertical Jump Mistakes to Avoid",
        twitterDescription: "10 errors killing your vertical jump and how to fix them.",
        twitterCard: "summary_large_image" as const,
        structuredData: [
            generateArticleSchema(
                "10 Common Vertical Jump Mistakes",
                "Guide to common mistakes that limit vertical jump progress and how to fix them.",
                new Date().toISOString(),
                new Date().toISOString(),
                "Dunk Calculator Pro Team",
                `${window.location.origin}/guides/common-vertical-jump-mistakes`
            ),
            generateWebPageSchema(
                "Common Vertical Jump Mistakes",
                "Avoid these critical mistakes that limit your vertical jump gains.",
                `${window.location.origin}/guides/common-vertical-jump-mistakes`
            ),
            generateFAQSchema([
                {
                    question: "Why am I not jumping higher despite training?",
                    answer: "Common reasons include overtraining, neglecting strength work, poor jump technique, lack of rest, and not tracking progress. Review your program for these issues."
                },
                {
                    question: "How much rest do I need between jump training sessions?",
                    answer: "48-72 hours between intense plyometric sessions is recommended. Your nervous system needs recovery time to adapt and improve."
                }
            ])
        ]
    };

    const mistakes = [
        {
            number: 1,
            title: "Training Through Fatigue",
            problem: "Doing plyometrics when tired or sore, thinking more is better.",
            solution: "Quality over quantity. Cut volume in half if not feeling explosive.",
            icon: AlertTriangle,
            severity: "high"
        },
        {
            number: 2,
            title: "Skipping Strength Training",
            problem: "Only doing plyometrics without building fundamental strength.",
            solution: "Spend 6-8 weeks building a strength base with squats and deadlifts first.",
            icon: XCircle,
            severity: "high"
        },
        {
            number: 3,
            title: "Neglecting Single-Leg Work",
            problem: "Only training bilateral (two-leg) movements.",
            solution: "Add Bulgarian split squats, single-leg hops, and step-ups to your program.",
            icon: AlertTriangle,
            severity: "medium"
        },
        {
            number: 4,
            title: "Poor Arm Swing",
            problem: "Not using arms aggressively during the jump.",
            solution: "Practice arm swing drills. Arms can add 10-15% to your jump height.",
            icon: Lightbulb,
            severity: "medium"
        },
        {
            number: 5,
            title: "Not Tracking Progress",
            problem: "Training without measuring improvement.",
            solution: "Test your vertical every 2-4 weeks and log all workouts.",
            icon: Target,
            severity: "medium"
        },
        {
            number: 6,
            title: "Ignoring Ankle Stiffness",
            problem: "Weak, unstable ankles that leak power on takeoff.",
            solution: "Add ankle hops, pogo jumps, and calf raises to your routine.",
            icon: AlertTriangle,
            severity: "medium"
        },
        {
            number: 7,
            title: "Training Too Often",
            problem: "Plyometric training every day without recovery.",
            solution: "Limit plyometrics to 2-3 sessions per week with 48hr rest between.",
            icon: XCircle,
            severity: "high"
        },
        {
            number: 8,
            title: "Wrong Exercise Selection",
            problem: "Doing random exercises without a structured program.",
            solution: "Follow a periodized program that progresses from foundation to power.",
            icon: Lightbulb,
            severity: "medium"
        },
        {
            number: 9,
            title: "Skipping the Warm-Up",
            problem: "Going straight into intense jumping without preparation.",
            solution: "10-15 min dynamic warm-up with gradually increasing intensity.",
            icon: AlertTriangle,
            severity: "high"
        },
        {
            number: 10,
            title: "Ignoring Hip Flexor Mobility",
            problem: "Tight hip flexors limiting hip extension power.",
            solution: "Daily hip flexor stretching and mobility drills.",
            icon: Lightbulb,
            severity: "medium"
        }
    ];

    return (
        <SEOPageLayout seoData={seoData} breadcrumbs={breadcrumbs} currentPage="Guides" className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-red-600 to-pink-600 text-white py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm mb-6">
                        <AlertTriangle className="w-4 h-4 mr-2" />
                        Training Guide
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        10 Common Vertical Jump Mistakes Killing Your Progress
                    </h1>
                    <p className="text-xl text-white/90 max-w-3xl mx-auto">
                        Stop making these critical errors that are limiting your vertical jump gains. Learn what's holding you back and exactly how to fix it.
                    </p>
                </div>
            </section>

            {/* Article Content */}
            <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                {/* Introduction */}
                <section className="mb-12">
                    <p className="text-lg text-gray-700 mb-4">
                        You're putting in the work but your jump isn't improving. Sound familiar? Before you add MORE training, check if you're making any of these common mistakes that sabotage vertical jump progress.
                    </p>
                </section>

                {/* Mistakes List */}
                <section className="space-y-6 mb-12">
                    {mistakes.map((mistake) => (
                        <Card key={mistake.number} className={`border-l-4 ${mistake.severity === 'high' ? 'border-l-red-500' : 'border-l-yellow-500'
                            }`}>
                            <CardContent className="p-6">
                                <div className="flex items-start gap-4">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${mistake.severity === 'high' ? 'bg-red-100' : 'bg-yellow-100'
                                        }`}>
                                        <span className="font-bold text-gray-800">{mistake.number}</span>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">{mistake.title}</h3>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="bg-red-50 p-3 rounded-lg">
                                                <p className="text-sm font-medium text-red-800 mb-1">❌ The Problem:</p>
                                                <p className="text-sm text-red-700">{mistake.problem}</p>
                                            </div>
                                            <div className="bg-green-50 p-3 rounded-lg">
                                                <p className="text-sm font-medium text-green-800 mb-1">✅ The Fix:</p>
                                                <p className="text-sm text-green-700">{mistake.solution}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </section>

                {/* Summary */}
                <section className="mb-12">
                    <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
                        <CardHeader>
                            <CardTitle className="text-blue-800">Quick Checklist</CardTitle>
                        </CardHeader>
                        <CardContent className="text-blue-900">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <h4 className="font-bold mb-2">Before Each Session:</h4>
                                    <ul className="space-y-1 text-sm">
                                        <li>☐ Proper warm-up completed</li>
                                        <li>☐ Feeling fresh and explosive</li>
                                        <li>☐ Clear plan for the workout</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-bold mb-2">Weekly Check-In:</h4>
                                    <ul className="space-y-1 text-sm">
                                        <li>☐ 48-72hr between plyometric sessions</li>
                                        <li>☐ Including strength training</li>
                                        <li>☐ Getting adequate sleep (7-9hr)</li>
                                    </ul>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* CTA Section */}
                <section className="text-center py-8 bg-gradient-to-r from-red-100 to-pink-100 rounded-2xl">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Train Smarter?</h2>
                    <p className="text-gray-600 mb-6">Follow a structured program designed to avoid these mistakes.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/blog/beginner-vertical-jump-program">
                            <Button className="bg-red-600 hover:bg-red-700">
                                <TrendingUp className="w-4 h-4 mr-2" />
                                View Beginner Program
                            </Button>
                        </Link>
                        <Link href="/calculators/vertical-jump-calculator">
                            <Button variant="outline">
                                Track Your Progress
                            </Button>
                        </Link>
                    </div>
                </section>

            </article>
        </SEOPageLayout>
    );
}
