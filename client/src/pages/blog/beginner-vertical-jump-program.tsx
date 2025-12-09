import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SEOPageLayout from "@/components/shared/seo-page-layout";
import { generateArticleSchema, generateWebPageSchema, generateFAQSchema, BreadcrumbItem } from "@/lib/seo";
import { Dumbbell, CheckCircle, Calendar, Target, TrendingUp, AlertTriangle, Clock, Zap } from "lucide-react";

export default function BeginnerVerticalJumpProgram() {
    const breadcrumbs: BreadcrumbItem[] = [
        { name: 'Home', url: '/' },
        { name: 'Blog', url: '/blog' },
        { name: 'Beginner Vertical Jump Program', url: '/blog/beginner-vertical-jump-program' }
    ];

    const seoData = {
        title: "8-Week Beginner Vertical Jump Program - Add 4-6 Inches | Dunk Calculator Pro",
        description: "Complete 8-week vertical jump training program for beginners. Science-backed exercises, weekly progressions, and realistic goals to add 4-6 inches to your vertical leap.",
        keywords: "beginner vertical jump program, vertical jump workout plan, how to jump higher beginner, 8 week jump program, vertical jump training for beginners, increase vertical jump workout",
        canonicalUrl: `${window.location.origin}/blog/beginner-vertical-jump-program`,
        ogTitle: "8-Week Beginner Vertical Jump Program - Add 4-6 Inches",
        ogDescription: "Complete training program for beginners to increase vertical jump. Week-by-week exercises and progressions.",
        twitterTitle: "8-Week Beginner Vertical Jump Program",
        twitterDescription: "Science-backed training program to add 4-6 inches to your vertical jump in 8 weeks.",
        twitterCard: "summary_large_image" as const,
        structuredData: [
            generateArticleSchema(
                "8-Week Beginner Vertical Jump Program - Add 4-6 Inches",
                "Complete vertical jump training program for beginners with weekly progressions.",
                `${window.location.origin}/blog/beginner-vertical-jump-program`,
                new Date().toISOString(),
                new Date().toISOString()
            ),
            generateWebPageSchema(
                "Beginner Vertical Jump Program",
                "8-week training program for beginners to increase vertical jump.",
                `${window.location.origin}/blog/beginner-vertical-jump-program`
            ),
            generateFAQSchema([
                {
                    question: "How much can a beginner increase their vertical jump?",
                    answer: "Beginners typically see the fastest gains, averaging 4-6 inches in the first 8-12 weeks of structured training. Some beginners with good genetics and consistency can gain up to 8 inches in their first training cycle."
                },
                {
                    question: "How many days a week should I train for vertical jump?",
                    answer: "Beginners should train 3 days per week with at least one rest day between sessions. This allows your nervous system and muscles to recover and adapt to the new demands."
                },
                {
                    question: "Can I do vertical jump training at home?",
                    answer: "Yes! Many effective exercises like squat jumps, tuck jumps, and single-leg hops require no equipment. Having access to a box or step expands your options, but bodyweight plyometrics are highly effective for beginners."
                }
            ])
        ]
    };

    return (
        <SEOPageLayout seoData={seoData} breadcrumbs={breadcrumbs} currentPage="Beginner Jump Program" className="bg-gradient-to-br from-green-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Hero Section */}
                <div className="text-center mb-12">
                    <div className="flex justify-center mb-4">
                        <div className="p-3 bg-green-100 rounded-full">
                            <Dumbbell className="w-8 h-8 text-green-600" />
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        8-Week Beginner Vertical Jump Program
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        A science-backed training program designed specifically for beginners. Follow this structured plan to add 4-6 inches to your vertical jump in just 8 weeks.
                    </p>
                </div>

                {/* Program Overview */}
                <div className="grid md:grid-cols-4 gap-4 mb-12">
                    <Card className="text-center bg-white/80 backdrop-blur-sm">
                        <CardContent className="pt-6">
                            <Calendar className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                            <div className="text-2xl font-bold text-gray-900">8</div>
                            <div className="text-sm text-gray-600">Weeks</div>
                        </CardContent>
                    </Card>
                    <Card className="text-center bg-white/80 backdrop-blur-sm">
                        <CardContent className="pt-6">
                            <Clock className="w-6 h-6 text-green-600 mx-auto mb-2" />
                            <div className="text-2xl font-bold text-gray-900">3x</div>
                            <div className="text-sm text-gray-600">Per Week</div>
                        </CardContent>
                    </Card>
                    <Card className="text-center bg-white/80 backdrop-blur-sm">
                        <CardContent className="pt-6">
                            <TrendingUp className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                            <div className="text-2xl font-bold text-gray-900">4-6"</div>
                            <div className="text-sm text-gray-600">Expected Gain</div>
                        </CardContent>
                    </Card>
                    <Card className="text-center bg-white/80 backdrop-blur-sm">
                        <CardContent className="pt-6">
                            <Target className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                            <div className="text-2xl font-bold text-gray-900">0</div>
                            <div className="text-sm text-gray-600">Equipment Needed</div>
                        </CardContent>
                    </Card>
                </div>

                {/* Before You Start */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Before You Start</h2>
                    <Card className="bg-yellow-50 border border-yellow-200">
                        <CardContent className="pt-6">
                            <div className="flex items-start">
                                <AlertTriangle className="w-6 h-6 text-yellow-600 mr-3 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-2">Important Prerequisites</h4>
                                    <ul className="space-y-2 text-gray-700">
                                        <li className="flex items-center">
                                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                                            <Link href="/guides/how-to-measure-vertical-jump" className="text-blue-600 hover:underline">
                                                Test and record your baseline vertical jump
                                            </Link>
                                        </li>
                                        <li className="flex items-center">
                                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                                            No current knee, ankle, or back injuries
                                        </li>
                                        <li className="flex items-center">
                                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                                            Access to flat, hard surface for training
                                        </li>
                                        <li className="flex items-center">
                                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                                            Comfortable athletic shoes with good support
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* Phase 1: Weeks 1-2 */}
                <section className="mb-12">
                    <div className="flex items-center mb-6">
                        <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">1</div>
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900">Phase 1: Foundation (Weeks 1-2)</h2>
                            <p className="text-gray-600">Build movement quality and prepare your body</p>
                        </div>
                    </div>

                    <Card className="bg-white/80 backdrop-blur-sm mb-6">
                        <CardHeader>
                            <CardTitle>Weekly Schedule</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600 mb-4">Train Monday, Wednesday, Friday (or any 3 non-consecutive days)</p>

                            <div className="space-y-6">
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-3">Each Session (30-40 minutes):</h4>

                                    <div className="bg-gray-50 p-4 rounded-lg space-y-4">
                                        <div>
                                            <h5 className="font-medium text-gray-900">Warm-Up (5 min)</h5>
                                            <ul className="text-sm text-gray-700 mt-2 space-y-1">
                                                <li>• Light jog in place: 2 minutes</li>
                                                <li>• High knees: 30 seconds</li>
                                                <li>• Butt kicks: 30 seconds</li>
                                                <li>• Leg swings (front/back): 10 each leg</li>
                                                <li>• Bodyweight squats: 10 reps</li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h5 className="font-medium text-gray-900">Main Workout</h5>
                                            <div className="overflow-x-auto mt-2">
                                                <table className="w-full text-sm">
                                                    <thead>
                                                        <tr className="bg-gray-100">
                                                            <th className="px-3 py-2 text-left">Exercise</th>
                                                            <th className="px-3 py-2 text-center">Sets</th>
                                                            <th className="px-3 py-2 text-center">Reps</th>
                                                            <th className="px-3 py-2 text-center">Rest</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td className="px-3 py-2">Squat Jumps</td>
                                                            <td className="px-3 py-2 text-center">3</td>
                                                            <td className="px-3 py-2 text-center">8</td>
                                                            <td className="px-3 py-2 text-center">60s</td>
                                                        </tr>
                                                        <tr className="bg-gray-50">
                                                            <td className="px-3 py-2">Split Squat Jumps</td>
                                                            <td className="px-3 py-2 text-center">2</td>
                                                            <td className="px-3 py-2 text-center">6 each</td>
                                                            <td className="px-3 py-2 text-center">60s</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="px-3 py-2">Calf Raises</td>
                                                            <td className="px-3 py-2 text-center">3</td>
                                                            <td className="px-3 py-2 text-center">15</td>
                                                            <td className="px-3 py-2 text-center">45s</td>
                                                        </tr>
                                                        <tr className="bg-gray-50">
                                                            <td className="px-3 py-2">Wall Sit Hold</td>
                                                            <td className="px-3 py-2 text-center">2</td>
                                                            <td className="px-3 py-2 text-center">30 sec</td>
                                                            <td className="px-3 py-2 text-center">60s</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="px-3 py-2">Plank Hold</td>
                                                            <td className="px-3 py-2 text-center">2</td>
                                                            <td className="px-3 py-2 text-center">30 sec</td>
                                                            <td className="px-3 py-2 text-center">45s</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* Phase 2: Weeks 3-5 */}
                <section className="mb-12">
                    <div className="flex items-center mb-6">
                        <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-4">2</div>
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900">Phase 2: Power Development (Weeks 3-5)</h2>
                            <p className="text-gray-600">Introduce plyometrics and increase intensity</p>
                        </div>
                    </div>

                    <Card className="bg-white/80 backdrop-blur-sm mb-6">
                        <CardHeader>
                            <CardTitle>Workout Progression</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <div className="overflow-x-auto">
                                    <table className="w-full text-sm">
                                        <thead>
                                            <tr className="bg-gray-100">
                                                <th className="px-3 py-2 text-left">Exercise</th>
                                                <th className="px-3 py-2 text-center">Sets</th>
                                                <th className="px-3 py-2 text-center">Reps</th>
                                                <th className="px-3 py-2 text-center">Rest</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="px-3 py-2 font-medium">Tuck Jumps</td>
                                                <td className="px-3 py-2 text-center">3</td>
                                                <td className="px-3 py-2 text-center">8</td>
                                                <td className="px-3 py-2 text-center">90s</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-3 py-2 font-medium">Broad Jumps</td>
                                                <td className="px-3 py-2 text-center">3</td>
                                                <td className="px-3 py-2 text-center">6</td>
                                                <td className="px-3 py-2 text-center">90s</td>
                                            </tr>
                                            <tr>
                                                <td className="px-3 py-2 font-medium">Single-Leg Hops</td>
                                                <td className="px-3 py-2 text-center">2</td>
                                                <td className="px-3 py-2 text-center">8 each</td>
                                                <td className="px-3 py-2 text-center">60s</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-3 py-2 font-medium">Squat Hold + Jump</td>
                                                <td className="px-3 py-2 text-center">3</td>
                                                <td className="px-3 py-2 text-center">6</td>
                                                <td className="px-3 py-2 text-center">90s</td>
                                            </tr>
                                            <tr>
                                                <td className="px-3 py-2 font-medium">Explosive Calf Raises</td>
                                                <td className="px-3 py-2 text-center">3</td>
                                                <td className="px-3 py-2 text-center">12</td>
                                                <td className="px-3 py-2 text-center">60s</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-3 py-2 font-medium">Mountain Climbers</td>
                                                <td className="px-3 py-2 text-center">2</td>
                                                <td className="px-3 py-2 text-center">20 each</td>
                                                <td className="px-3 py-2 text-center">45s</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-blue-50 border border-blue-200">
                        <CardContent className="pt-6">
                            <div className="flex items-start">
                                <Zap className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" />
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-1">Week 4 Midpoint Test</h4>
                                    <p className="text-gray-700 text-sm">Test your vertical jump at the end of Week 4. Most beginners see 2-3 inches of improvement at this point.</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* Phase 3: Weeks 6-8 */}
                <section className="mb-12">
                    <div className="flex items-center mb-6">
                        <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-4">3</div>
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900">Phase 3: Peak Performance (Weeks 6-8)</h2>
                            <p className="text-gray-600">Maximum power output and sport-specific jumping</p>
                        </div>
                    </div>

                    <Card className="bg-white/80 backdrop-blur-sm mb-6">
                        <CardHeader>
                            <CardTitle>Advanced Workout</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <div className="overflow-x-auto">
                                    <table className="w-full text-sm">
                                        <thead>
                                            <tr className="bg-gray-100">
                                                <th className="px-3 py-2 text-left">Exercise</th>
                                                <th className="px-3 py-2 text-center">Sets</th>
                                                <th className="px-3 py-2 text-center">Reps</th>
                                                <th className="px-3 py-2 text-center">Rest</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="px-3 py-2 font-medium">Max Effort Vertical Jumps</td>
                                                <td className="px-3 py-2 text-center">4</td>
                                                <td className="px-3 py-2 text-center">5</td>
                                                <td className="px-3 py-2 text-center">2 min</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-3 py-2 font-medium">Continuous Tuck Jumps</td>
                                                <td className="px-3 py-2 text-center">3</td>
                                                <td className="px-3 py-2 text-center">8</td>
                                                <td className="px-3 py-2 text-center">90s</td>
                                            </tr>
                                            <tr>
                                                <td className="px-3 py-2 font-medium">Alternating Bounds</td>
                                                <td className="px-3 py-2 text-center">3</td>
                                                <td className="px-3 py-2 text-center">10 each</td>
                                                <td className="px-3 py-2 text-center">90s</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-3 py-2 font-medium">Single-Leg Box Jumps (if available)</td>
                                                <td className="px-3 py-2 text-center">2</td>
                                                <td className="px-3 py-2 text-center">6 each</td>
                                                <td className="px-3 py-2 text-center">90s</td>
                                            </tr>
                                            <tr>
                                                <td className="px-3 py-2 font-medium">Pogo Jumps</td>
                                                <td className="px-3 py-2 text-center">3</td>
                                                <td className="px-3 py-2 text-center">15</td>
                                                <td className="px-3 py-2 text-center">60s</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* Recovery Tips */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Recovery Guidelines</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Sleep</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600">Get 7-9 hours of sleep per night. Growth hormone is released during deep sleep, which is essential for muscle adaptation.</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Nutrition</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600">Eat 0.7-1g of protein per pound of bodyweight daily. Consume carbohydrates before training for energy.</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Rest Days</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600">Never skip rest days. Your nervous system needs 48+ hours to recover from plyometric training.</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Stretching</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600">Stretch hips, hamstrings, and calves after each session. Foam roll tight areas on rest days.</p>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Expected Results */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Expected Results</h2>
                    <Card className="bg-gradient-to-r from-green-500 to-blue-500 text-white">
                        <CardContent className="pt-6">
                            <div className="grid md:grid-cols-3 gap-6 text-center">
                                <div>
                                    <div className="text-3xl font-bold">Week 4</div>
                                    <div className="text-lg opacity-90">+2-3 inches</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold">Week 6</div>
                                    <div className="text-lg opacity-90">+3-4 inches</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold">Week 8</div>
                                    <div className="text-lg opacity-90">+4-6 inches</div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* Related Content */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Continue Learning</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <Link href="/vertical-jump-training">
                            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                                <CardHeader>
                                    <CardTitle className="text-lg flex items-center">
                                        <Dumbbell className="w-5 h-5 mr-2 text-blue-600" />
                                        All Training Programs
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-gray-600">Explore intermediate and advanced programs.</p>
                                </CardContent>
                            </Card>
                        </Link>
                        <Link href="/guides/how-to-measure-vertical-jump">
                            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                                <CardHeader>
                                    <CardTitle className="text-lg flex items-center">
                                        <Target className="w-5 h-5 mr-2 text-green-600" />
                                        Measure Your Jump
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-gray-600">Learn how to accurately test your progress.</p>
                                </CardContent>
                            </Card>
                        </Link>
                        <Link href="/calculators/vertical-jump-calculator">
                            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                                <CardHeader>
                                    <CardTitle className="text-lg flex items-center">
                                        <TrendingUp className="w-5 h-5 mr-2 text-purple-600" />
                                        Track Your Progress
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-gray-600">Use our calculator to track improvements.</p>
                                </CardContent>
                            </Card>
                        </Link>
                    </div>
                </section>
            </div>
        </SEOPageLayout>
    );
}
