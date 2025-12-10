import { Link } from "wouter";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    HelpCircle,
    TrendingUp,
    Target,
    CheckCircle,
    XCircle,
    Ruler,
    Zap
} from "lucide-react";
import SEOPageLayout from "@/components/shared/seo-page-layout";
import { generateArticleSchema, generateWebPageSchema, generateFAQSchema, BreadcrumbItem } from "@/lib/seo";

export default function CanA5FootPersonDunk() {
    const breadcrumbs: BreadcrumbItem[] = [
        { name: "Home", url: "/" },
        { name: "Blog", url: "/blog" },
        { name: "Can a 5-Foot Person Dunk?", url: "/blog/can-a-5-foot-person-dunk" }
    ];

    const seoData = {
        title: "Can a 5-Foot Person Dunk? The Honest Answer | Dunk Calculator Pro",
        description: "Find out if a 5-foot tall person can dunk a basketball. We break down the math, physics, and real-world examples of short dunkers.",
        keywords: "can short person dunk, 5 foot dunk, can a 5 foot person dunk, short people dunking, minimum height to dunk",
        canonicalUrl: `${window.location.origin}/blog/can-a-5-foot-person-dunk`,
        ogTitle: "Can a 5-Foot Person Dunk?",
        ogDescription: "The honest answer about whether a 5-foot person can dunk.",
        twitterTitle: "Can a 5-Foot Person Dunk? The Truth",
        twitterDescription: "Breaking down the math behind short dunking.",
        twitterCard: "summary_large_image" as const,
        structuredData: [
            generateArticleSchema(
                "Can a 5-Foot Person Dunk?",
                "Analysis of whether a 5-foot tall person can realistically dunk a basketball.",
                new Date().toISOString(),
                new Date().toISOString(),
                "Dunk Calculator Pro Team",
                `${window.location.origin}/blog/can-a-5-foot-person-dunk`
            ),
            generateWebPageSchema(
                "Can a 5-Foot Person Dunk",
                "Find out if a 5-foot tall person can dunk a basketball.",
                `${window.location.origin}/blog/can-a-5-foot-person-dunk`
            ),
            generateFAQSchema([
                {
                    question: "Can a 5-foot person dunk on a regulation rim?",
                    answer: "While theoretically possible, it would require a vertical jump of approximately 48+ inches, which is extremely rare even among professional athletes."
                },
                {
                    question: "What is the shortest height that can dunk?",
                    answer: "Spud Webb dunked at 5'7\", and there are recreational players at 5'5\" who can dunk. Below 5'4\", dunking becomes exceptionally rare."
                }
            ])
        ]
    };

    return (
        <SEOPageLayout seoData={seoData} breadcrumbs={breadcrumbs} currentPage="Blog" className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm mb-6">
                        <HelpCircle className="w-4 h-4 mr-2" />
                        Deep Dive
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Can a 5-Foot Person Dunk?
                    </h1>
                    <p className="text-xl text-white/90 max-w-3xl mx-auto">
                        The honest, math-backed answer to whether someone standing 5 feet tall can throw down on a regulation basketball rim.
                    </p>
                </div>
            </section>

            {/* Article Content */}
            <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                {/* The Short Answer */}
                <section className="mb-12">
                    <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-300">
                        <CardHeader>
                            <CardTitle className="text-2xl text-yellow-800">The Short Answer</CardTitle>
                        </CardHeader>
                        <CardContent className="text-yellow-900">
                            <p className="text-lg mb-4">
                                <strong>Technically yes, but practically almost impossible.</strong> A 5-foot person would need a vertical jump of approximately 48-50 inches to dunk on a standard 10-foot rim. For context, the NBA record is around 46 inches.
                            </p>
                            <p>
                                Let's break down exactly why this is so difficult and what it would take.
                            </p>
                        </CardContent>
                    </Card>
                </section>

                {/* The Math */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">The Math Behind the Dunk</h2>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <Card className="bg-blue-50 border-blue-200">
                            <CardHeader>
                                <CardTitle className="text-blue-800 flex items-center">
                                    <Ruler className="w-5 h-5 mr-2" />
                                    Starting Point
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="text-blue-900">
                                <ul className="space-y-2">
                                    <li><strong>Height:</strong> 5'0" (60 inches)</li>
                                    <li><strong>Standing Reach:</strong> ~6'8" (80 inches)*</li>
                                    <li><strong>Rim Height:</strong> 10'0" (120 inches)</li>
                                </ul>
                                <p className="text-sm mt-4 text-blue-700">*Average ratio, varies by arm length</p>
                            </CardContent>
                        </Card>

                        <Card className="bg-purple-50 border-purple-200">
                            <CardHeader>
                                <CardTitle className="text-purple-800 flex items-center">
                                    <Zap className="w-5 h-5 mr-2" />
                                    What's Needed
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="text-purple-900">
                                <ul className="space-y-2">
                                    <li><strong>Height to clear rim:</strong> ~10'6" (126 in)</li>
                                    <li><strong>Gap from reach:</strong> 46 inches</li>
                                    <li><strong>Required vertical:</strong> 46-50 inches</li>
                                </ul>
                                <p className="text-sm mt-4 text-purple-700">With excellent arm length, maybe 44"</p>
                            </CardContent>
                        </Card>
                    </div>

                    <p className="text-lg text-gray-700">
                        The 46-50 inch vertical requirement puts a 5-foot dunker in the realm of the most explosive athletes in history. For reference, Michael Jordan's vertical was measured at 48 inches, and he stood 6'6".
                    </p>
                </section>

                {/* Reality Check */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Reality Check: What About Shorter Dunkers?</h2>

                    <div className="space-y-4">
                        <Card>
                            <CardContent className="p-4 flex items-center">
                                <CheckCircle className="w-6 h-6 text-green-500 mr-4 flex-shrink-0" />
                                <div>
                                    <strong>5'7" - Spud Webb:</strong> Won the 1986 Slam Dunk Contest with a 46" vertical. The gold standard for short dunkers.
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-4 flex items-center">
                                <CheckCircle className="w-6 h-6 text-green-500 mr-4 flex-shrink-0" />
                                <div>
                                    <strong>5'5" - Recreational dunkers:</strong> A few documented cases exist of 5'5" athletes dunking with 42-44" verticals.
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-4 flex items-center">
                                <XCircle className="w-6 h-6 text-red-500 mr-4 flex-shrink-0" />
                                <div>
                                    <strong>5'3" and below:</strong> No documented cases of regulation-height dunking at this height.
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* What Would It Take */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">What Would It Actually Take?</h2>

                    <Card className="bg-gray-50">
                        <CardContent className="p-6">
                            <p className="text-gray-700 mb-4">For a 5-foot person to dunk on a regulation rim, they would need:</p>

                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <span className="bg-orange-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-3 flex-shrink-0">1</span>
                                    <span><strong>Elite genetics:</strong> Fast-twitch muscle fiber dominance, long arms relative to height, elastic tendons</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="bg-orange-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-3 flex-shrink-0">2</span>
                                    <span><strong>Years of training:</strong> Professional-level jump training for 3-5+ years</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="bg-orange-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-3 flex-shrink-0">3</span>
                                    <span><strong>Optimal body composition:</strong> Very low body fat while maintaining explosive power</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="bg-orange-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-3 flex-shrink-0">4</span>
                                    <span><strong>Perfect technique:</strong> Maximum efficiency in takeoff mechanics</span>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                </section>

                {/* Alternatives */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Realistic Alternatives</h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        <Card className="bg-green-50 border-green-200">
                            <CardHeader>
                                <CardTitle className="text-green-800">Lower Rim Heights</CardTitle>
                            </CardHeader>
                            <CardContent className="text-green-900">
                                <ul className="space-y-2">
                                    <li>• 9-foot rim: Reduces requirement by ~12"</li>
                                    <li>• 8-foot rim: Achievable with 34-36" vertical</li>
                                    <li>• Build confidence and technique</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="bg-blue-50 border-blue-200">
                            <CardHeader>
                                <CardTitle className="text-blue-800">Alternative Goals</CardTitle>
                            </CardHeader>
                            <CardContent className="text-blue-900">
                                <ul className="space-y-2">
                                    <li>• Touch rim (more achievable)</li>
                                    <li>• Maximize vertical for gameplay</li>
                                    <li>• Focus on other skills (handles, shooting)</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="text-center py-8 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Calculate Your Personal Requirements</h2>
                    <p className="text-gray-600 mb-6">Find out exactly what vertical jump you need to dunk based on your specific measurements.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/">
                            <Button className="bg-blue-600 hover:bg-blue-700">
                                <Target className="w-4 h-4 mr-2" />
                                Dunk Calculator
                            </Button>
                        </Link>
                        <Link href="/calculators/vertical-jump-calculator">
                            <Button variant="outline">
                                Measure Your Vertical
                            </Button>
                        </Link>
                    </div>
                </section>

            </article>
        </SEOPageLayout>
    );
}
