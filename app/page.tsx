"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  const projects = [
    {
      id: "shera",
      name: "Shera",
      insights: {
        dailyActiveUsers:
          "https://eu.posthog.com/shared/0zgcThj0cUSXs-g30n-YS-v5PdbW4Q",
        weeklyActiveUsers:
          "https://eu.posthog.com/shared/xUFzFxI3lq5gE0MAJFBBbGKTGvmcmg",
      },
    },
    {
      id: "planeatrepeat",
      name: "PlanEatRepeat",
      insights: {
        dailyActiveUsers:
          "https://eu.posthog.com/embedded/d0Li8Ov9K0dZoq6_NwY7eb1vGEY_oQ",
        weeklyActiveUsers:
          "https://eu.posthog.com/embedded/Bw0ZSCNXNbnNqpxk4bBKJ64qDWmFQA",
      },
    },
    {
      id: "whenisf1",
      name: "When is F1",
      insights: {
        dailyActiveUsers:
          "https://eu.posthog.com/shared/snzZLdVFqsP9fMJ5-nvDmzndy8vNzQ",
        weeklyActiveUsers:
          "https://eu.posthog.com/shared/xrURPFbq_7LXbvBZYmB6SK2Pdhy5vA",
      },
    },
    {
      id: "snack",
      name: "Snack",
      insights: {
        dailyActiveUsers:
          "https://eu.posthog.com/shared/OO3cTBikOEC8ZiZ2GKzUpl5VoD4xaw",
        weeklyActiveUsers:
          "https://eu.posthog.com/shared/Gy9Yf8BVHVqZivLgzD-GW4xIYA9iHA",
      },
    },
  ];
  return (
    <div className="container mx-auto py-4">
      <h1 className="text-2xl font-bold mb-4">Analytics Dashboard</h1>

      <div className="grid gap-6">
        {projects.map((project) => (
          <div key={project.id} className="space-y-2">
            <h2 className="text-lg font-semibold">{project.name}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="overflow-hidden border">
                <CardContent className="p-0">
                  <div className="h-[400px]">
                    <iframe
                      src={project.insights.dailyActiveUsers}
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      allowFullScreen
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border">
                <CardContent className="p-0">
                  <div className="h-[400px]">
                    <iframe
                      src={project.insights.weeklyActiveUsers}
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      allowFullScreen
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {project.id !== projects[projects.length - 1].id && (
              <Separator className="my-3" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
