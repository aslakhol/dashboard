import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface Project {
  id: string
  name: string
  description: string
  insights: {
    dailyActiveUsers: string
    weeklyActiveUsers: string
  }
}

interface ProjectDashboardProps {
  project: Project
}

export function ProjectDashboard({ project }: ProjectDashboardProps) {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold">{project.name}</h2>
          <p className="text-muted-foreground">{project.description}</p>
        </div>
        <div className="mt-2 md:mt-0">
          <span className="text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</span>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Daily Active Users</CardTitle>
            <CardDescription>Number of unique users per day</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="aspect-video w-full">
              <iframe
                src={project.insights.dailyActiveUsers}
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen
                className="rounded-md"
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Weekly Active Users</CardTitle>
            <CardDescription>Number of unique users per week</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="aspect-video w-full">
              <iframe
                src={project.insights.weeklyActiveUsers}
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen
                className="rounded-md"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

