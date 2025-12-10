import { Link } from "wouter";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Zap,
    TrendingUp,
    Target,
    Clock,
    CheckCircle,
    AlertTriangle,
    ArrowUp,
    Activity
} from "lucide-react";
import SEOPageLayout from "@/components/shared/seo-page-layout";
import { generateArticleSchema, generateWebPageSchema, generateFAQSchema, BreadcrumbItem } from "@/lib/seo";

export default function BestExercisesToJumpHigher() {
    const breadcrumbs: BreadcrumbItem[] = [
        { name: "Home", url: "/" },
        { name: "Guides", url: "/guides" },
        { name: "Best Exercises to Jump Higher", url: "/guides/best-exercises-to-jump-higher" }
    ];

    const seoData = {
        title: "15 Best Exercises to Jump Higher (Proven by Science) | Dunk Calculator Pro",
        description: "Discover the most effective exercises to increase your vertical jump, backed by research. Includes plyometrics, strength training, and mobility work.",
        keywords: "exercises to jump higher, best vertical jump exercises, how to increase vertical, jump training exercises, plyometric exercises",
        canonicalUrl: `${window.location.origin}/guides/best-exercises-to-jump-higher`,
        ogTitle: "15 Best Exercises to Jump Higher",
        ogDescription: "Science-backed exercises to increase your vertical jump fast.",
        twitterTitle: "Best Exercises to Jump Higher",
        twitterDescription: "15 proven exercises for explosive vertical jump gains.",
        twitterCard: "summary_large_image" as const,
        structuredData: [
            generateArticleSchema(
                "15 Best Exercises to Jump Higher",
                "Comprehensive guide to the most effective exercises for increasing vertical jump height.",
                new Date().toISOString(),
                new Date().toISOString(),
                "Dunk Calculator Pro Team",
                `${window.location.origin}/guides/best-exercises-to-jump-higher`
            ),
            generateWebPageSchema(
                "Best Exercises to Jump Higher",
                "Discover the most effective exercises to increase your vertical jump.",
                `${window.location.origin}/guides/best-exercises-to-jump-higher`
            ),
            generateFAQSchema([
                {
                    question: "What is the single best exercise for vertical jump?",
                    answer: "The back squat is often considered the foundation, but depth jumps have been shown to provide the fastest direct improvements due to the stretch-shortening cycle activation."
                },
                {
                    question: "How long does it take to see results?",
                    answer: "Most athletes see measurable improvements within 4-6 weeks of consistent training. Significant gains (3+ inches) typically take 8-12 weeks."
                },
                {
                    question: "Should I do plyometrics or weights first?",
                    answer: "Do plyometrics first when fresh, as they require maximum neuromuscular recruitment. Follow with strength work when slightly fatigued is fine for strength development."
                }
            ])
        ]
    };

    const exercises = [
        { name: "Box Jumps", category: "Plyometric", difficulty: "Beginner", impact: "High", description: "Jump onto a box and step down. Focus on explosive hip extension." },
        { name: "Depth Jumps", category: "Plyometric", difficulty: "Advanced", impact: "Very High", description: "Step off box, land briefly, and immediately explode upward." },
        { name: "Back Squats", category: "Strength", difficulty: "Intermediate", impact: "High", description: "The king of leg strength. Go deep and drive through heels." },
        { name: "Trap Bar Deadlifts", category: "Strength", difficulty: "Intermediate", impact: "High", description: "Total body power. Great for building explosive strength." },
        { name: "Bulgarian Split Squats", category: "Strength", difficulty: "Intermediate", impact: "Medium", description: "Single-leg strength crucial for one-foot jumpers." },
        { name: "Broad Jumps", category: "Plyometric", difficulty: "Beginner", impact: "Medium", description: "Horizontal power that transfers to vertical ability." },
        { name: "Tuck Jumps", category: "Plyometric", difficulty: "Beginner", impact: "Medium", description: "Rapid reactive training. Pull knees to chest mid-air." },
        { name: "Power Cleans", category: "Olympic", difficulty: "Advanced", impact: "Very High", description: "Triple extension powerhouse. Learn proper technique first." },
        { name: "Hip Thrusts", category: "Strength", difficulty: "Beginner", impact: "Medium", description: "Glute power is essential for jumping performance." },
        { name: "Single-Leg Box Jumps", category: "Plyometric", difficulty: "Advanced", impact: "High", description: "Sport-specific for basketball approach jumps." },
        { name: "Calf Raises", category: "Strength", difficulty: "Beginner", impact: "Low", description: "Often neglected but important for push-off power." },
        { name: "Jump Squats", category: "Plyometric", difficulty: "Intermediate", impact: "High", description: "Bridges strength and power. Use 30-40% bodyweight." },
        { name: "Ankle Hops", category: "Plyometric", difficulty: "Beginner", impact: "Low", description: "Develops reactive ankle stiffness for quick ground contact." },
        { name: "Romanian Deadlifts", category: "Strength", difficulty: "Intermediate", impact: "Medium", description: "Hamstring and glute builder for posterior chain power." },
        { name: "Bounding", category: "Plyometric", difficulty: "Intermediate", impact: "High", description: "Alternating single-leg hops covering maximum distance." }
    ];

    return (
        <SEOPageLayout seoData={seoData} breadcrumbs={breadcrumbs} currentPage="Guides" className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-green-600 to-teal-600 text-white py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm mb-6">
                        <ArrowUp className="w-4 h-4 mr-2" />
                        Complete Exercise Guide
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        15 Best Exercises to Jump Higher
                    </h1>
                    <p className="text-xl text-white/90 max-w-3xl mx-auto">
                        Proven exercises that increase your vertical jump, categorized by type and difficulty. Build your perfect jump training program.
                    </p>
                </div>
            </section>

            {/* Article Content */}
            <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                {/* Introduction */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">The Science of Jumping Higher</h2>
                    <p className="text-lg text-gray-700 mb-4">
                        Vertical jump is a combination of strength, power, and technique. The best training programs target all three components with a mix of strength exercises (to build force capacity) and plyometrics (to develop rate of force development).
                    </p>
                    <Card className="bg-blue-50 border-blue-200 my-6">
                        <CardContent className="p-6">
                            <h3 className="font-bold text-blue-900 mb-2">The Power Equation</h3>
                            <p className="text-blue-800">
                                Power = Force × Velocity. To jump higher, you need to produce more force (strength training) AND apply it faster (plyometrics). The exercises below target both.
                            </p>
                        </CardContent>
                    </Card>
                </section>

                {/* Exercise List */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">The Complete Exercise List</h2>
                    <div className="space-y-4">
                        {exercises.map((exercise, index) => (
                            <Card key={index} className="hover:shadow-lg transition-shadow">
                                <CardContent className="p-4">
                                    <div className="flex items-start justify-between">
                                        <div className="flex-1">
                                            <h3 className="font-bold text-lg text-gray-900 flex items-center">
                                                <span className="bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">
                                                    {index + 1}
                                                </span>
                                                {exercise.name}
                                            </h3>
                                            <p className="text-gray-600 mt-2 ml-11">{exercise.description}</p>
                                        </div>
                                        <div className="flex flex-col gap-2 ml-4">
                                            <span className={`text-xs px-2 py-1 rounded ${exercise.category === 'Plyometric' ? 'bg-purple-100 text-purple-700' :
                                                    exercise.category === 'Strength' ? 'bg-blue-100 text-blue-700' :
                                                        'bg-red-100 text-red-700'
                                                }`}>
                                                {exercise.category}
                                            </span>
                                            <span className={`text-xs px-2 py-1 rounded ${exercise.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
                                                    exercise.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                                                        'bg-red-100 text-red-700'
                                                }`}>
                                                {exercise.difficulty}
                                            </span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* Programming Tips */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Program These Exercises</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <Card className="bg-purple-50 border-purple-200">
                            <CardHeader>
                                <CardTitle className="text-purple-800">Plyometrics</CardTitle>
                            </CardHeader>
                            <CardContent className="text-purple-900">
                                <ul className="space-y-2">
                                    <li>• 2-3 sessions per week</li>
                                    <li>• Low reps (3-6 per set)</li>
                                    <li>• Full recovery between sets (2-3 min)</li>
                                    <li>• Do first when fresh</li>
                                </ul>
                            </CardContent>
                        </Card>
                        <Card className="bg-blue-50 border-blue-200">
                            <CardHeader>
                                <CardTitle className="text-blue-800">Strength Work</CardTitle>
                            </CardHeader>
                            <CardContent className="text-blue-900">
                                <ul className="space-y-2">
                                    <li>• 2-3 sessions per week</li>
                                    <li>• 4-6 reps for power, 8-12 for hypertrophy</li>
                                    <li>• Progressive overload (add weight over time)</li>
                                    <li>• Can follow plyometric work</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="text-center py-8 bg-gradient-to-r from-green-100 to-teal-100 rounded-2xl">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Track Your Progress</h2>
                    <p className="text-gray-600 mb-6">Measure your vertical jump before and after implementing these exercises.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/calculators/vertical-jump-calculator">
                            <Button className="bg-green-600 hover:bg-green-700">
                                <TrendingUp className="w-4 h-4 mr-2" />
                                Measure Your Jump
                            </Button>
                        </Link>
                        <Link href="/blog/beginner-vertical-jump-program">
                            <Button variant="outline">
                                View Beginner Program
                            </Button>
                        </Link>
                    </div>
                </section>

            </article>
        </SEOPageLayout>
    );
}
