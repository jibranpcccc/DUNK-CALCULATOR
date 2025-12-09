import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SEOPageLayout from "@/components/shared/seo-page-layout";
import { generateArticleSchema, generateWebPageSchema, generateFAQSchema, generateHowToSchema, BreadcrumbItem } from "@/lib/seo";
import { Ruler, CheckCircle, Target, AlertCircle, ArrowRight, Lightbulb } from "lucide-react";

export default function HowToMeasureVerticalJump() {
    const breadcrumbs: BreadcrumbItem[] = [
        { name: 'Home', url: '/' },
        { name: 'Guides', url: '/guides' },
        { name: 'How to Measure Vertical Jump', url: '/guides/how-to-measure-vertical-jump' }
    ];

    const seoData = {
        title: "How to Measure Vertical Jump Accurately - Complete Guide | Dunk Calculator Pro",
        description: "Learn the exact methods to measure your vertical jump height accurately. Wall test, Vertec device, and app-based methods explained with step-by-step instructions and common mistakes to avoid.",
        keywords: "how to measure vertical jump, vertical jump test, standing vertical jump measurement, vertical leap test, jump height measurement, wall test vertical jump",
        canonicalUrl: `${window.location.origin}/guides/how-to-measure-vertical-jump`,
        ogTitle: "How to Measure Vertical Jump Accurately - Complete Guide",
        ogDescription: "Master the exact techniques to measure your vertical jump height. Multiple methods with step-by-step instructions.",
        twitterTitle: "How to Measure Vertical Jump Accurately - Complete Guide",
        twitterDescription: "Learn the wall test, Vertec method, and app-based approaches to accurately measure your vertical jump.",
        twitterCard: "summary_large_image" as const,
        structuredData: [
            generateArticleSchema(
                "How to Measure Vertical Jump Accurately - Complete Guide",
                "Learn the exact methods to measure your vertical jump height accurately with step-by-step instructions.",
                `${window.location.origin}/guides/how-to-measure-vertical-jump`,
                new Date().toISOString(),
                new Date().toISOString()
            ),
            generateWebPageSchema(
                "How to Measure Vertical Jump Accurately",
                "Complete guide to measuring vertical jump height with multiple methods.",
                `${window.location.origin}/guides/how-to-measure-vertical-jump`
            ),
            generateHowToSchema(
                "How to Measure Your Vertical Jump",
                "A step-by-step guide to accurately measuring your vertical jump height using the wall test method.",
                [
                    { name: "Prepare the wall", text: "Find a flat wall next to a hard, level surface. Make sure you have chalk or tape to mark heights." },
                    { name: "Measure standing reach", text: "Stand flat-footed with your side to the wall. Reach up as high as possible with your dominant hand and mark this height." },
                    { name: "Perform the jump", text: "From a standing position, jump as high as possible and touch the wall at your peak height. Mark this point with chalk." },
                    { name: "Calculate the difference", text: "Measure the distance between your standing reach mark and your jump mark. This is your vertical jump height." }
                ],
                "30 minutes"
            ),
            generateFAQSchema([
                {
                    question: "What is a good vertical jump height?",
                    answer: "For men, 16-20 inches is below average, 20-24 inches is average, 24-28 inches is above average, and 28+ inches is excellent. For women, subtract about 4-6 inches from each category. NBA players average around 28-32 inches."
                },
                {
                    question: "Should I measure standing or running vertical jump?",
                    answer: "Both are valid measurements. Standing vertical (no approach) tests pure explosive power, while running vertical (with approach) tests your ability to convert horizontal momentum into vertical height. Most combine testing uses standing vertical."
                },
                {
                    question: "How often should I test my vertical jump?",
                    answer: "Test every 4-6 weeks when training. More frequent testing doesn't show meaningful changes and can lead to frustration. Always test at the same time of day, fully rested, for consistent results."
                },
                {
                    question: "What's the difference between Vertec and wall test?",
                    answer: "The Vertec device has adjustable vanes you swipe at your peak, providing slightly more accurate readings. The wall test uses chalk or tape marks. Both are accurate to within 1-2 inches when performed correctly."
                }
            ])
        ]
    };

    return (
        <SEOPageLayout seoData={seoData} breadcrumbs={breadcrumbs} currentPage="How to Measure Vertical Jump" className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Hero Section */}
                <div className="text-center mb-12">
                    <div className="flex justify-center mb-4">
                        <div className="p-3 bg-blue-100 rounded-full">
                            <Ruler className="w-8 h-8 text-blue-600" />
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        How to Measure Vertical Jump Accurately
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Master the techniques used by professional trainers to accurately measure your vertical jump height. Learn multiple methods, avoid common mistakes, and track your progress effectively.
                    </p>
                </div>

                {/* Key Stats */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    <Card className="text-center bg-white/80 backdrop-blur-sm">
                        <CardContent className="pt-6">
                            <div className="text-3xl font-bold text-blue-600">4</div>
                            <div className="text-sm text-gray-600">Measurement Methods</div>
                        </CardContent>
                    </Card>
                    <Card className="text-center bg-white/80 backdrop-blur-sm">
                        <CardContent className="pt-6">
                            <div className="text-3xl font-bold text-green-600">±1"</div>
                            <div className="text-sm text-gray-600">Accuracy When Done Right</div>
                        </CardContent>
                    </Card>
                    <Card className="text-center bg-white/80 backdrop-blur-sm">
                        <CardContent className="pt-6">
                            <div className="text-3xl font-bold text-purple-600">30 min</div>
                            <div className="text-sm text-gray-600">Complete Test Time</div>
                        </CardContent>
                    </Card>
                </div>

                {/* Method 1: Wall Test */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Method 1: The Wall Test (Most Common)</h2>

                    {/* Infographic Image */}
                    <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
                        <img
                            src="/images/vertical-jump-measurement.png"
                            alt="Step-by-step infographic showing how to measure vertical jump using the wall test method"
                            className="w-full h-auto"
                            loading="lazy"
                        />
                    </div>

                    <div className="space-y-6">
                        <Card className="border-l-4 border-blue-500">
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">1</span>
                                    Prepare Your Testing Area
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-gray-700">
                                    <li className="flex items-start">
                                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                        Find a flat wall next to a hard, level floor (not carpet)
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                        Get chalk, tape, or removable markers
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                        Ensure you have at least 3 feet of clear space around you
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                        Warm up for 5-10 minutes before testing
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="border-l-4 border-blue-500">
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">2</span>
                                    Measure Your Standing Reach
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <p className="text-gray-700">
                                        Stand sideways to the wall with your feet flat on the ground. Reach up as high as possible with the hand closest to the wall, keeping your feet completely flat. Have someone mark the highest point you can touch.
                                    </p>
                                    <div className="bg-blue-50 p-4 rounded-lg">
                                        <p className="text-sm text-blue-800">
                                            <strong>Pro Tip:</strong> Your standing reach is typically 1.33x your height. For a 6'0" person, expect approximately 96 inches (8 feet).
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-l-4 border-blue-500">
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">3</span>
                                    Perform the Jump
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-gray-700">
                                    <li className="flex items-start">
                                        <ArrowRight className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                                        Stand with feet shoulder-width apart
                                    </li>
                                    <li className="flex items-start">
                                        <ArrowRight className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                                        Dip down by bending your knees and hips (countermovement)
                                    </li>
                                    <li className="flex items-start">
                                        <ArrowRight className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                                        Explode upward with maximum effort
                                    </li>
                                    <li className="flex items-start">
                                        <ArrowRight className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                                        Touch the wall at your highest point with chalk-covered fingers
                                    </li>
                                    <li className="flex items-start">
                                        <ArrowRight className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                                        Perform 3-5 attempts with 30-60 seconds rest between
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="border-l-4 border-blue-500">
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">4</span>
                                    Calculate Your Vertical Jump
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="bg-gray-100 p-4 rounded-lg text-center mb-4">
                                    <p className="text-lg font-mono">
                                        <strong>Vertical Jump = Jump Reach - Standing Reach</strong>
                                    </p>
                                </div>
                                <p className="text-gray-700">
                                    Measure the distance between your standing reach mark and your highest jump mark. Record your best attempt as your official vertical jump score.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Method 2: Vertec Device */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Method 2: Vertec Device (Professional)</h2>
                    <Card className="bg-white/80 backdrop-blur-sm">
                        <CardContent className="pt-6">
                            <p className="text-gray-700 mb-4">
                                The Vertec is a professional-grade device used in the NFL Combine and NBA Draft workouts. It features rotating plastic vanes that you swipe at the peak of your jump.
                            </p>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-2">Advantages:</h4>
                                    <ul className="space-y-1 text-gray-700 text-sm">
                                        <li>• More precise measurements (±0.5 inch)</li>
                                        <li>• Standardized testing protocol</li>
                                        <li>• Easy to see exact vane touched</li>
                                        <li>• No chalk or markers needed</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-2">Disadvantages:</h4>
                                    <ul className="space-y-1 text-gray-700 text-sm">
                                        <li>• Expensive ($500-$1,500)</li>
                                        <li>• Not practical for home use</li>
                                        <li>• Requires proper calibration</li>
                                    </ul>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* Common Mistakes */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Mistakes to Avoid</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <Card className="border-l-4 border-red-500">
                            <CardHeader>
                                <CardTitle className="flex items-center text-red-700">
                                    <AlertCircle className="w-5 h-5 mr-2" />
                                    Testing Cold
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600">Always warm up for 5-10 minutes. Cold muscles produce 10-15% less power, giving inaccurate results.</p>
                            </CardContent>
                        </Card>
                        <Card className="border-l-4 border-red-500">
                            <CardHeader>
                                <CardTitle className="flex items-center text-red-700">
                                    <AlertCircle className="w-5 h-5 mr-2" />
                                    Wrong Standing Reach
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600">Don't stand on tiptoes for standing reach. Keep feet completely flat—this is the baseline for your measurement.</p>
                            </CardContent>
                        </Card>
                        <Card className="border-l-4 border-red-500">
                            <CardHeader>
                                <CardTitle className="flex items-center text-red-700">
                                    <AlertCircle className="w-5 h-5 mr-2" />
                                    Testing Fatigued
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600">Test when fully rested. Testing after leg workouts or games can reduce jump height by 2-4 inches.</p>
                            </CardContent>
                        </Card>
                        <Card className="border-l-4 border-red-500">
                            <CardHeader>
                                <CardTitle className="flex items-center text-red-700">
                                    <AlertCircle className="w-5 h-5 mr-2" />
                                    Soft Surface
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600">Always test on hard surfaces. Carpet, grass, or mats absorb energy and reduce measured height.</p>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Average Benchmarks */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Average Vertical Jump by Level</h2>
                    <Card className="bg-white/80 backdrop-blur-sm overflow-hidden">
                        <CardContent className="p-0">
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm">
                                    <thead className="bg-gray-100">
                                        <tr>
                                            <th className="px-6 py-3 text-left font-semibold text-gray-900">Level</th>
                                            <th className="px-6 py-3 text-center font-semibold text-gray-900">Men</th>
                                            <th className="px-6 py-3 text-center font-semibold text-gray-900">Women</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        <tr>
                                            <td className="px-6 py-4 text-gray-700">Below Average</td>
                                            <td className="px-6 py-4 text-center text-gray-700">Below 16"</td>
                                            <td className="px-6 py-4 text-center text-gray-700">Below 12"</td>
                                        </tr>
                                        <tr className="bg-gray-50">
                                            <td className="px-6 py-4 text-gray-700">Average</td>
                                            <td className="px-6 py-4 text-center text-gray-700">16-20"</td>
                                            <td className="px-6 py-4 text-center text-gray-700">12-16"</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 text-gray-700">Above Average</td>
                                            <td className="px-6 py-4 text-center text-gray-700">20-24"</td>
                                            <td className="px-6 py-4 text-center text-gray-700">16-20"</td>
                                        </tr>
                                        <tr className="bg-gray-50">
                                            <td className="px-6 py-4 text-gray-700">Good</td>
                                            <td className="px-6 py-4 text-center text-gray-700">24-28"</td>
                                            <td className="px-6 py-4 text-center text-gray-700">20-24"</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 text-gray-700">Excellent</td>
                                            <td className="px-6 py-4 text-center text-gray-700">28-32"</td>
                                            <td className="px-6 py-4 text-center text-gray-700">24-28"</td>
                                        </tr>
                                        <tr className="bg-blue-50">
                                            <td className="px-6 py-4 font-semibold text-blue-700">Elite/Pro</td>
                                            <td className="px-6 py-4 text-center font-semibold text-blue-700">32"+</td>
                                            <td className="px-6 py-4 text-center font-semibold text-blue-700">28"+</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* Pro Tips */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Pro Tips for Accurate Testing</h2>
                    <div className="space-y-4">
                        <Card className="bg-yellow-50 border border-yellow-200">
                            <CardContent className="pt-6">
                                <div className="flex">
                                    <Lightbulb className="w-6 h-6 text-yellow-600 mr-3 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Test at the Same Time</h4>
                                        <p className="text-gray-700 text-sm">Your vertical jump can vary by 1-2 inches throughout the day. Test at the same time for consistent comparisons.</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="bg-yellow-50 border border-yellow-200">
                            <CardContent className="pt-6">
                                <div className="flex">
                                    <Lightbulb className="w-6 h-6 text-yellow-600 mr-3 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Use the Same Shoes</h4>
                                        <p className="text-gray-700 text-sm">Different shoes can affect your jump by 0.5-1 inch. Use the same pair for all tests.</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="bg-yellow-50 border border-yellow-200">
                            <CardContent className="pt-6">
                                <div className="flex">
                                    <Lightbulb className="w-6 h-6 text-yellow-600 mr-3 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Take Multiple Attempts</h4>
                                        <p className="text-gray-700 text-sm">Perform 3-5 max effort jumps with 30-60 seconds rest. Record your best jump, not the average.</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Related Tools */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Use Our Calculators</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <Link href="/calculators/vertical-jump-calculator">
                            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                                <CardHeader>
                                    <CardTitle className="text-lg flex items-center">
                                        <Target className="w-5 h-5 mr-2 text-blue-600" />
                                        Vertical Jump Calculator
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-gray-600">Calculate your vertical using different measurement methods.</p>
                                </CardContent>
                            </Card>
                        </Link>
                        <Link href="/calculators/standing-reach-calculator">
                            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                                <CardHeader>
                                    <CardTitle className="text-lg flex items-center">
                                        <Ruler className="w-5 h-5 mr-2 text-green-600" />
                                        Standing Reach Calculator
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-gray-600">Estimate your standing reach based on your height.</p>
                                </CardContent>
                            </Card>
                        </Link>
                        <Link href="/">
                            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                                <CardHeader>
                                    <CardTitle className="text-lg flex items-center">
                                        <Target className="w-5 h-5 mr-2 text-orange-600" />
                                        Dunk Calculator
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-gray-600">Find out what you need to dunk a basketball.</p>
                                </CardContent>
                            </Card>
                        </Link>
                    </div>
                </section>
            </div>
        </SEOPageLayout>
    );
}
