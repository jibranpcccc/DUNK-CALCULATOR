import { Link } from "wouter";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Star,
    TrendingUp,
    Target,
    CheckCircle,
    Award,
    Ruler,
    Zap
} from "lucide-react";
import SEOPageLayout from "@/components/shared/seo-page-layout";
import { generateArticleSchema, generateWebPageSchema, generateFAQSchema, BreadcrumbItem } from "@/lib/seo";

export default function ShortestNBAPlayersWhoDunked() {
    const breadcrumbs: BreadcrumbItem[] = [
        { name: "Home", url: "/" },
        { name: "Blog", url: "/blog" },
        { name: "Shortest NBA Players Who Dunked", url: "/blog/shortest-nba-players-who-dunked" }
    ];

    const seoData = {
        title: "Shortest NBA Players Who Could Dunk | Dunk Calculator Pro",
        description: "Meet the shortest NBA players who defied physics to throw down dunks. Learn their heights, verticals, and what made them elite dunkers despite their size.",
        keywords: "shortest NBA dunkers, short players who can dunk, Spud Webb dunk, Nate Robinson dunk, short basketball players dunking",
        canonicalUrl: `${window.location.origin}/blog/shortest-nba-players-who-dunked`,
        ogTitle: "Shortest NBA Players Who Could Dunk",
        ogDescription: "From Spud Webb to Nate Robinson - short players who defied physics.",
        twitterTitle: "Shortest NBA Dunkers of All Time",
        twitterDescription: "Amazing short players who threw down in the NBA.",
        twitterCard: "summary_large_image" as const,
        structuredData: [
            generateArticleSchema(
                "Shortest NBA Players Who Could Dunk",
                "Profile of the shortest NBA players who could dunk, including their heights and vertical jumps.",
                new Date().toISOString(),
                new Date().toISOString(),
                "Dunk Calculator Pro Team",
                `${window.location.origin}/blog/shortest-nba-players-who-dunked`
            ),
            generateWebPageSchema(
                "Shortest NBA Dunkers",
                "Meet the shortest NBA players who defied physics to throw down dunks.",
                `${window.location.origin}/blog/shortest-nba-players-who-dunked`
            ),
            generateFAQSchema([
                {
                    question: "Who is the shortest NBA player to ever dunk?",
                    answer: "Spud Webb at 5'7\" is the shortest NBA player to win the Slam Dunk Contest (1986). He had a 46-inch vertical leap."
                },
                {
                    question: "Can a 5'6\" person dunk?",
                    answer: "Yes, but it requires an exceptional vertical jump (around 42+ inches). Very few people have this ability naturally, but dedicated training can help."
                }
            ])
        ]
    };

    const players = [
        {
            name: "Spud Webb",
            height: "5'7\" (170 cm)",
            vertical: "46 inches",
            achievement: "1986 Slam Dunk Contest Champion",
            description: "The most iconic short dunker. Webb shocked the world by winning the dunk contest over Dominique Wilkins.",
            era: "1985-1998"
        },
        {
            name: "Nate Robinson",
            height: "5'9\" (175 cm)",
            vertical: "43.5 inches",
            achievement: "3x Slam Dunk Contest Champion",
            description: "The only player to win 3 dunk contests. Robinson's bounce and creativity made him a fan favorite.",
            era: "2005-2016"
        },
        {
            name: "Isaiah Thomas",
            height: "5'9\" (175 cm)",
            vertical: "41 inches",
            achievement: "2x NBA All-Star",
            description: "While known for scoring, IT could throw down in games. His quick first step created dunk opportunities.",
            era: "2011-2022"
        },
        {
            name: "Muggsy Bogues",
            height: "5'3\" (160 cm)",
            vertical: "44 inches",
            achievement: "Shortest NBA Player Ever",
            description: "While Bogues could dunk in practice, he never did in an NBA game - focusing on playmaking instead.",
            era: "1987-2001"
        },
        {
            name: "Chris Clemons",
            height: "5'9\" (175 cm)",
            vertical: "40 inches",
            achievement: "NCAA Scoring Record Holder",
            description: "The NCAA's fourth-leading scorer had legitimate dunking ability despite his height.",
            era: "2019-present"
        },
        {
            name: "Earl Boykins",
            height: "5'5\" (165 cm)",
            vertical: "42 inches",
            achievement: "13-year NBA Career",
            description: "Second shortest NBA player ever. Boykins could dunk in practice with his exceptional vertical.",
            era: "1998-2012"
        }
    ];

    return (
        <SEOPageLayout seoData={seoData} breadcrumbs={breadcrumbs} currentPage="Blog" className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-orange-600 to-red-600 text-white py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm mb-6">
                        <Star className="w-4 h-4 mr-2" />
                        NBA Legends
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Shortest NBA Players Who Could Dunk
                    </h1>
                    <p className="text-xl text-white/90 max-w-3xl mx-auto">
                        These undersized athletes proved that heart, training, and explosive athleticism can overcome any height disadvantage. Here are the shortest dunkers in NBA history.
                    </p>
                </div>
            </section>

            {/* Article Content */}
            <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                {/* Introduction */}
                <section className="mb-12">
                    <p className="text-lg text-gray-700 mb-4">
                        At 10 feet high, the basketball rim seems designed to exclude shorter players from dunking. But a select few athletes have defied the odds, combining exceptional vertical jumps with fearless attitudes to throw down among giants.
                    </p>
                    <Card className="bg-orange-50 border-orange-200 my-6">
                        <CardContent className="p-6">
                            <h3 className="font-bold text-orange-900 mb-2">The Math Behind Short Dunking</h3>
                            <p className="text-orange-800">
                                A 5'7" player with average proportions has a standing reach of about 7'4". To dunk, they need to reach approximately 10'2" (6 inches above rim). That means they need a vertical jump of 34+ inches just to touch rim, and 40+ inches to dunk comfortably.
                            </p>
                        </CardContent>
                    </Card>
                </section>

                {/* Players List */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">The Shortest Dunkers in NBA History</h2>
                    <div className="space-y-6">
                        {players.map((player, index) => (
                            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                                <CardContent className="p-0">
                                    <div className="flex flex-col md:flex-row">
                                        <div className="md:w-1/3 bg-gradient-to-br from-orange-500 to-red-600 p-6 text-white">
                                            <h3 className="text-2xl font-bold mb-2">{player.name}</h3>
                                            <div className="space-y-2 text-white/90">
                                                <p className="flex items-center">
                                                    <Ruler className="w-4 h-4 mr-2" />
                                                    {player.height}
                                                </p>
                                                <p className="flex items-center">
                                                    <Zap className="w-4 h-4 mr-2" />
                                                    {player.vertical} vertical
                                                </p>
                                                <p className="text-sm text-white/70">{player.era}</p>
                                            </div>
                                        </div>
                                        <div className="md:w-2/3 p-6">
                                            <div className="flex items-center mb-3">
                                                <Award className="w-5 h-5 text-yellow-500 mr-2" />
                                                <span className="font-semibold text-gray-800">{player.achievement}</span>
                                            </div>
                                            <p className="text-gray-600">{player.description}</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* Vertical Jump Requirements */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Vertical Jump Requirements by Height</h2>
                    <Card>
                        <CardContent className="p-6">
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="border-b bg-gray-50">
                                            <th className="text-left py-3 px-4">Height</th>
                                            <th className="text-left py-3 px-4">Est. Standing Reach</th>
                                            <th className="text-left py-3 px-4">Min Vertical to Dunk</th>
                                            <th className="text-left py-3 px-4">Difficulty</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b">
                                            <td className="py-3 px-4">5'5"</td>
                                            <td className="py-3 px-4">7'1"</td>
                                            <td className="py-3 px-4">~42"</td>
                                            <td className="py-3 px-4"><span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs">Extreme</span></td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="py-3 px-4">5'7"</td>
                                            <td className="py-3 px-4">7'4"</td>
                                            <td className="py-3 px-4">~40"</td>
                                            <td className="py-3 px-4"><span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs">Very Hard</span></td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="py-3 px-4">5'9"</td>
                                            <td className="py-3 px-4">7'6"</td>
                                            <td className="py-3 px-4">~38"</td>
                                            <td className="py-3 px-4"><span className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs">Hard</span></td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="py-3 px-4">5'11"</td>
                                            <td className="py-3 px-4">7'9"</td>
                                            <td className="py-3 px-4">~35"</td>
                                            <td className="py-3 px-4"><span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs">Challenging</span></td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 px-4">6'0"+</td>
                                            <td className="py-3 px-4">7'11"+</td>
                                            <td className="py-3 px-4">~32"</td>
                                            <td className="py-3 px-4"><span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">Achievable</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* CTA Section */}
                <section className="text-center py-8 bg-gradient-to-r from-orange-100 to-red-100 rounded-2xl">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Can You Dunk?</h2>
                    <p className="text-gray-600 mb-6">Calculate your exact dunk requirements based on your height and reach.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/">
                            <Button className="bg-orange-600 hover:bg-orange-700">
                                <Target className="w-4 h-4 mr-2" />
                                Calculate Your Requirements
                            </Button>
                        </Link>
                        <Link href="/dunking-requirements-by-height">
                            <Button variant="outline">
                                View All Height Requirements
                            </Button>
                        </Link>
                    </div>
                </section>

            </article>
        </SEOPageLayout>
    );
}
