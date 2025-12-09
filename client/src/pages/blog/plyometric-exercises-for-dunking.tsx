import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SEOPageLayout from "@/components/shared/seo-page-layout";
import { generateArticleSchema, generateWebPageSchema, generateFAQSchema, BreadcrumbItem } from "@/lib/seo";
import { Zap, CheckCircle, AlertTriangle, Target, TrendingUp, Dumbbell, ArrowRight } from "lucide-react";

export default function PlyometricExercisesForDunking() {
    const breadcrumbs: BreadcrumbItem[] = [
        { name: 'Home', url: '/' },
        { name: 'Blog', url: '/blog' },
        { name: 'Plyometric Exercises for Dunking', url: '/blog/plyometric-exercises-for-dunking' }
    ];

    const seoData = {
        title: "10 Best Plyometric Exercises for Dunking - Explosive Jump Training | Dunk Calculator Pro",
        description: "Master the 10 best plyometric exercises to increase your vertical jump for dunking. Detailed instructions, progressions, and science-backed training methods for explosive power.",
        keywords: "plyometric exercises for dunking, best plyometrics for vertical jump, jump training exercises, explosive jump workout, box jumps for dunking, depth jumps, tuck jumps",
        canonicalUrl: `${window.location.origin}/blog/plyometric-exercises-for-dunking`,
        ogTitle: "10 Best Plyometric Exercises for Dunking",
        ogDescription: "Master explosive plyometric exercises to skyrocket your vertical jump for dunking.",
        twitterTitle: "10 Best Plyometric Exercises for Dunking",
        twitterDescription: "Science-backed plyometric exercises to increase your vertical jump and dunk ability.",
        twitterCard: "summary_large_image" as const,
        structuredData: [
            generateArticleSchema(
                "10 Best Plyometric Exercises for Dunking",
                "Detailed guide to plyometric exercises that increase vertical jump for dunking.",
                `${window.location.origin}/blog/plyometric-exercises-for-dunking`,
                new Date().toISOString(),
                new Date().toISOString()
            ),
            generateWebPageSchema(
                "Plyometric Exercises for Dunking",
                "Master explosive plyometric exercises for vertical jump improvement.",
                `${window.location.origin}/blog/plyometric-exercises-for-dunking`
            ),
            generateFAQSchema([
                {
                    question: "How often should I do plyometric exercises?",
                    answer: "Beginners should do plyometrics 2-3 times per week with at least 48 hours rest between sessions. Advanced athletes can train plyometrics 3-4 times per week but should cycle intensity throughout the week."
                },
                {
                    question: "Are plyometrics safe for teenagers?",
                    answer: "Yes, when done correctly with proper progression. Teenagers should start with low-intensity exercises like squat jumps and pogos before advancing to depth jumps. Proper landing mechanics are essential."
                },
                {
                    question: "Do I need equipment for plyometric training?",
                    answer: "No, many effective exercises are bodyweight only. Box jumps require a sturdy box or platform, but alternatives like tuck jumps and squat jumps work well without any equipment."
                }
            ])
        ]
    };

    const exercises = [
        {
            name: "Squat Jumps",
            difficulty: "Beginner",
            muscles: "Quads, Glutes, Calves",
            description: "The foundation of plyometric training. Start in a squat position and explode upward, reaching for maximum height.",
            steps: [
                "Stand with feet shoulder-width apart",
                "Lower into a quarter squat",
                "Explode upward with arms swinging overhead",
                "Land softly and immediately descend into next rep"
            ],
            sets: "3-4 sets of 8-10 reps",
            rest: "60-90 seconds"
        },
        {
            name: "Tuck Jumps",
            difficulty: "Intermediate",
            muscles: "Hip Flexors, Quads, Core",
            description: "Jump explosively and bring knees to chest at the peak. Excellent for developing hip flexor power needed for dunking.",
            steps: [
                "Start standing with arms at sides",
                "Jump as high as possible",
                "At peak height, bring knees rapidly to chest",
                "Land softly with bent knees"
            ],
            sets: "3 sets of 6-8 reps",
            rest: "90 seconds"
        },
        {
            name: "Box Jumps",
            difficulty: "Intermediate",
            muscles: "Quads, Glutes, Hip Flexors",
            description: "Jump onto an elevated surface. Progressively increase height as you improve. Start with a 20-24 inch box.",
            steps: [
                "Stand facing a sturdy box",
                "Dip into quarter squat and swing arms back",
                "Explode upward and forward onto the box",
                "Stand fully, step down, and repeat"
            ],
            sets: "4 sets of 5-6 reps",
            rest: "90-120 seconds"
        },
        {
            name: "Depth Jumps",
            difficulty: "Advanced",
            muscles: "Full Lower Body, Reactive Strength",
            description: "Step off a box and immediately jump upward. This trains the stretch-shortening cycle for maximum explosive power.",
            steps: [
                "Stand on a 12-18 inch box",
                "Step (don't jump) off the box",
                "Upon landing, immediately explode upward",
                "Minimize ground contact time"
            ],
            sets: "3 sets of 5 reps",
            rest: "2-3 minutes"
        },
        {
            name: "Single-Leg Bounds",
            difficulty: "Intermediate",
            muscles: "Glutes, Hamstrings, Single-Leg Power",
            description: "Exaggerated running strides for distance and height. Critical for one-foot dunking approach.",
            steps: [
                "Start with a few running steps",
                "Push off one leg for maximum height and distance",
                "Land on opposite leg and immediately bound again",
                "Focus on horizontal distance with good height"
            ],
            sets: "3 sets of 6 bounds each leg",
            rest: "90 seconds"
        },
        {
            name: "Pogo Jumps",
            difficulty: "Beginner",
            muscles: "Calves, Ankle Stability",
            description: "Quick, small jumps using primarily ankle power. Develops calf reactivity and Achilles tendon stiffness.",
            steps: [
                "Stand with feet together",
                "Jump using only your calves (minimal knee bend)",
                "Focus on minimal ground contact time",
                "Keep jumping continuously for reps"
            ],
            sets: "3 sets of 20 reps",
            rest: "45-60 seconds"
        },
        {
            name: "Broad Jumps",
            difficulty: "Beginner-Intermediate",
            muscles: "Glutes, Quads, Hip Extension",
            description: "Jump forward for maximum distance. Develops horizontal power and hip extension crucial for approach jumps.",
            steps: [
                "Stand with feet hip-width apart",
                "Swing arms back while lowering hips",
                "Explode forward and upward",
                "Land softly with bent knees, stick the landing"
            ],
            sets: "3 sets of 6 reps",
            rest: "90 seconds"
        },
        {
            name: "Split Squat Jumps",
            difficulty: "Intermediate",
            muscles: "Quads, Glutes, Single-Leg Stability",
            description: "Alternating lunge jumps that develop single-leg power and stability essential for dunking.",
            steps: [
                "Start in a lunge position",
                "Jump explosively, switching legs mid-air",
                "Land in opposite lunge position",
                "Immediately repeat"
            ],
            sets: "3 sets of 8 each leg",
            rest: "60-90 seconds"
        },
        {
            name: "Reactive Box Drops",
            difficulty: "Advanced",
            muscles: "Reactive Strength, Ankle/Knee Stability",
            description: "Drop from height and absorb the landing with minimal movement. Develops eccentric strength and joint stability.",
            steps: [
                "Stand on 18-24 inch box",
                "Step off and land with soft knees",
                "Absorb impact as quietly as possible",
                "Hold landing position for 2 seconds"
            ],
            sets: "3 sets of 6 reps",
            rest: "60 seconds"
        },
        {
            name: "Continuous Hurdle Hops",
            difficulty: "Advanced",
            muscles: "Hip Flexors, Reactive Power",
            description: "Consecutive jumps over small hurdles or cones. Develops reactive jumping ability for in-game scenarios.",
            steps: [
                "Set up 4-6 low hurdles (6-12 inches)",
                "Jump over each hurdle continuously",
                "Minimize ground contact between jumps",
                "Keep knees high throughout"
            ],
            sets: "3 sets of 4-6 hurdles x 3 rounds",
            rest: "90-120 seconds"
        }
    ];

    return (
        <SEOPageLayout seoData={seoData} breadcrumbs={breadcrumbs} currentPage="Plyometric Exercises" className="bg-gradient-to-br from-orange-50 via-white to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Hero Section */}
                <div className="text-center mb-12">
                    <div className="flex justify-center mb-4">
                        <div className="p-3 bg-orange-100 rounded-full">
                            <Zap className="w-8 h-8 text-orange-600" />
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        10 Best Plyometric Exercises for Dunking
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Master these explosive exercises to develop the power and reactive strength needed to throw down thunderous dunks. Science-backed training methods used by elite athletes.
                    </p>
                </div>

                {/* Quick Stats */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    <Card className="text-center bg-white/80 backdrop-blur-sm">
                        <CardContent className="pt-6">
                            <div className="text-3xl font-bold text-orange-600">10</div>
                            <div className="text-sm text-gray-600">Exercises</div>
                        </CardContent>
                    </Card>
                    <Card className="text-center bg-white/80 backdrop-blur-sm">
                        <CardContent className="pt-6">
                            <div className="text-3xl font-bold text-green-600">3</div>
                            <div className="text-sm text-gray-600">Difficulty Levels</div>
                        </CardContent>
                    </Card>
                    <Card className="text-center bg-white/80 backdrop-blur-sm">
                        <CardContent className="pt-6">
                            <div className="text-3xl font-bold text-blue-600">4-8"</div>
                            <div className="text-sm text-gray-600">Potential Gain</div>
                        </CardContent>
                    </Card>
                </div>

                {/* What Are Plyometrics */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">What Are Plyometrics?</h2>
                    <Card className="bg-white/80 backdrop-blur-sm">
                        <CardContent className="pt-6">
                            <p className="text-gray-700 mb-4">
                                Plyometrics are explosive exercises that train your muscles to produce maximum force in the shortest time possible. They work by exploiting the <strong>stretch-shortening cycle (SSC)</strong> — when a muscle is rapidly stretched before contraction, it produces more force than a static contraction alone.
                            </p>
                            <p className="text-gray-700">
                                For dunking, plyometrics are essential because they develop the reactive strength and power output needed to elevate your body quickly against gravity. Research shows that plyometric training can increase vertical jump by <strong>4-8 inches</strong> when combined with strength training.
                            </p>
                        </CardContent>
                    </Card>
                </section>

                {/* Exercise List */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">The Exercises</h2>
                    <div className="space-y-8">
                        {exercises.map((exercise, index) => (
                            <Card key={index} className="bg-white/80 backdrop-blur-sm overflow-hidden">
                                <CardHeader className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                                    <div className="flex justify-between items-center">
                                        <CardTitle className="flex items-center text-xl">
                                            <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3 text-sm font-bold">
                                                {index + 1}
                                            </span>
                                            {exercise.name}
                                        </CardTitle>
                                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${exercise.difficulty === "Beginner" ? "bg-green-500/30" :
                                                exercise.difficulty === "Intermediate" ? "bg-yellow-500/30" :
                                                    exercise.difficulty === "Beginner-Intermediate" ? "bg-lime-500/30" :
                                                        "bg-red-500/30"
                                            }`}>
                                            {exercise.difficulty}
                                        </span>
                                    </div>
                                </CardHeader>
                                <CardContent className="pt-6">
                                    <div className="mb-4">
                                        <span className="text-sm font-medium text-gray-500">Primary Muscles: </span>
                                        <span className="text-sm text-gray-700">{exercise.muscles}</span>
                                    </div>
                                    <p className="text-gray-700 mb-4">{exercise.description}</p>

                                    <div className="bg-gray-50 p-4 rounded-lg mb-4">
                                        <h4 className="font-semibold text-gray-900 mb-2">How to Perform:</h4>
                                        <ol className="space-y-1">
                                            {exercise.steps.map((step, stepIndex) => (
                                                <li key={stepIndex} className="flex items-start text-sm text-gray-700">
                                                    <span className="w-5 h-5 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mr-2 flex-shrink-0 text-xs font-medium">
                                                        {stepIndex + 1}
                                                    </span>
                                                    {step}
                                                </li>
                                            ))}
                                        </ol>
                                    </div>

                                    <div className="flex gap-4 text-sm">
                                        <div className="bg-blue-50 px-3 py-2 rounded">
                                            <span className="font-medium text-blue-700">Volume: </span>
                                            <span className="text-blue-600">{exercise.sets}</span>
                                        </div>
                                        <div className="bg-purple-50 px-3 py-2 rounded">
                                            <span className="font-medium text-purple-700">Rest: </span>
                                            <span className="text-purple-600">{exercise.rest}</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* Safety Tips */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Safety Guidelines</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <Card className="border-l-4 border-yellow-500">
                            <CardContent className="pt-6">
                                <div className="flex items-start">
                                    <AlertTriangle className="w-6 h-6 text-yellow-600 mr-3 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Always Warm Up</h4>
                                        <p className="text-sm text-gray-600">5-10 minutes of light cardio and dynamic stretching before every plyometric session.</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="border-l-4 border-yellow-500">
                            <CardContent className="pt-6">
                                <div className="flex items-start">
                                    <AlertTriangle className="w-6 h-6 text-yellow-600 mr-3 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Use Proper Surfaces</h4>
                                        <p className="text-sm text-gray-600">Train on firm but forgiving surfaces like gym floors, turf, or rubber mats. Avoid concrete and soft sand.</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="border-l-4 border-yellow-500">
                            <CardContent className="pt-6">
                                <div className="flex items-start">
                                    <AlertTriangle className="w-6 h-6 text-yellow-600 mr-3 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Master Landing First</h4>
                                        <p className="text-sm text-gray-600">Learn to land softly with bent knees before progressing to advanced exercises.</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="border-l-4 border-yellow-500">
                            <CardContent className="pt-6">
                                <div className="flex items-start">
                                    <AlertTriangle className="w-6 h-6 text-yellow-600 mr-3 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Don't Train Fatigued</h4>
                                        <p className="text-sm text-gray-600">Plyometrics require a fresh nervous system. Never do them at the end of workouts.</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Related Content */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Continue Your Training</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <Link href="/blog/beginner-vertical-jump-program">
                            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                                <CardHeader>
                                    <CardTitle className="text-lg flex items-center">
                                        <Dumbbell className="w-5 h-5 mr-2 text-green-600" />
                                        8-Week Beginner Program
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-gray-600">Complete training plan for jump improvement.</p>
                                </CardContent>
                            </Card>
                        </Link>
                        <Link href="/vertical-jump-training">
                            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                                <CardHeader>
                                    <CardTitle className="text-lg flex items-center">
                                        <TrendingUp className="w-5 h-5 mr-2 text-blue-600" />
                                        All Training Programs
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-gray-600">Explore intermediate and advanced programs.</p>
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
                                    <p className="text-sm text-gray-600">Calculate what you need to dunk.</p>
                                </CardContent>
                            </Card>
                        </Link>
                    </div>
                </section>
            </div>
        </SEOPageLayout>
    );
}
