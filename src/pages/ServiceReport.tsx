import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, CheckCircle2, AlertTriangle, XCircle, Download, RefreshCw, TrendingUp, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, Area, AreaChart } from "recharts";

const services = {
  "drawing-validation": {
    name: "Drawing Validation",
    description: "Comprehensive validation of architectural and engineering drawings",
    lastRun: "2024-01-20T10:30:00Z",
    nextRun: "2024-01-21T10:30:00Z",
    status: "completed"
  },
  "model-qa": {
    name: "Model QA",
    description: "Quality assurance checks for BIM models and 3D data",
    lastRun: "2024-01-20T14:15:00Z",
    nextRun: "2024-01-21T14:15:00Z",
    status: "running"
  },
  "specification-review": {
    name: "Specification Review",
    description: "Automated review of project specifications and requirements",
    lastRun: "2024-01-20T09:00:00Z",
    nextRun: "2024-01-21T09:00:00Z",
    status: "completed"
  },
  "clash-detection": {
    name: "Clash Detection",
    description: "Detection and analysis of model conflicts and clashes",
    lastRun: "2024-01-20T16:45:00Z",
    nextRun: "2024-01-21T16:45:00Z",
    status: "error"
  },
  "custom-validation": {
    name: "Custom Validation",
    description: "Tailored validation rules for specific project requirements",
    lastRun: "2024-01-20T12:20:00Z",
    nextRun: "2024-01-21T12:20:00Z",
    status: "completed"
  }
};

const mockReportData = {
  totalChecks: 1247,
  passedChecks: 1186,
  warningChecks: 52,
  failedChecks: 9,
  issues: [
    {
      id: 1,
      type: "error",
      title: "Missing Reference Grid",
      description: "Grid line A1 is referenced but not defined in the model",
      location: "Level 1, Zone A",
      severity: "high"
    },
    {
      id: 2,
      type: "warning",
      title: "Non-standard Layer Name",
      description: "Layer 'ARCH_WALL_001' does not follow naming convention",
      location: "Level 2, Zone B",
      severity: "medium"
    },
    {
      id: 3,
      type: "error",
      title: "Dimension Mismatch",
      description: "Room area calculation differs from manual measurement",
      location: "Level 3, Room 301",
      severity: "high"
    }
  ],
  trendsData: [
    { date: "Jan 15", passed: 1140, warnings: 45, failed: 12, total: 1197 },
    { date: "Jan 16", passed: 1156, warnings: 48, failed: 11, total: 1215 },
    { date: "Jan 17", passed: 1168, warnings: 50, failed: 10, total: 1228 },
    { date: "Jan 18", passed: 1175, warnings: 53, failed: 8, total: 1236 },
    { date: "Jan 19", passed: 1182, warnings: 51, failed: 9, total: 1242 },
    { date: "Jan 20", passed: 1186, warnings: 52, failed: 9, total: 1247 }
  ],
  issuesByCategory: [
    { name: "Geometry", value: 35, color: "#ef4444" },
    { name: "Standards", value: 15, color: "#f59e0b" },
    { name: "Materials", value: 8, color: "#eab308" },
    { name: "Coordination", value: 3, color: "#84cc16" }
  ],
  performanceByLevel: [
    { level: "Level 1", passed: 298, warnings: 12, failed: 3 },
    { level: "Level 2", passed: 285, warnings: 15, failed: 2 },
    { level: "Level 3", passed: 292, warnings: 10, failed: 1 },
    { level: "Level 4", passed: 311, warnings: 15, failed: 3 }
  ]
};

export default function ServiceReport() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();
  
  const service = serviceId ? services[serviceId as keyof typeof services] : null;

  if (!service) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-background/80 p-6">
        <div className="max-w-4xl mx-auto">
          <Button variant="ghost" onClick={() => navigate("/")} className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
          <Card>
            <CardContent className="p-12 text-center">
              <h1 className="text-2xl font-bold mb-4">Service Not Found</h1>
              <p className="text-muted-foreground">The requested service report could not be found.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  const successRate = Math.round((mockReportData.passedChecks / mockReportData.totalChecks) * 100);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-background/80 p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header with Apple-style window controls */}
        <div className="bg-card rounded-xl shadow-sm border border-border/50 overflow-hidden">
          {/* Apple-style title bar */}
          <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-card to-card/90 border-b border-border/50">
            <div className="flex items-center space-x-3">
              {/* Apple window control dots */}
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-600 transition-colors cursor-pointer"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-600 transition-colors cursor-pointer"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full hover:bg-green-600 transition-colors cursor-pointer"></div>
              </div>
              <div className="text-sm font-medium text-muted-foreground">
                ValiBlox QA Report
              </div>
            </div>
            
            <Button variant="ghost" onClick={() => navigate("/")} size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </div>

          {/* Report Header */}
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-3xl font-bold mb-2">{service.name}</h1>
                <p className="text-muted-foreground text-lg">{service.description}</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Badge 
                  variant={service.status === "completed" ? "default" : 
                          service.status === "running" ? "secondary" : "destructive"}
                  className="px-3 py-1"
                >
                  {service.status === "completed" && <CheckCircle2 className="mr-1 h-3 w-3" />}
                  {service.status === "running" && <RefreshCw className="mr-1 h-3 w-3 animate-spin" />}
                  {service.status === "error" && <XCircle className="mr-1 h-3 w-3" />}
                  {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
                </Badge>
                
                <Button variant="outline" size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Export Report
                </Button>
              </div>
            </div>

            {/* Status Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/50 dark:to-green-900/50 border-green-200 dark:border-green-800">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-green-700 dark:text-green-300 font-medium">Passed</p>
                      <p className="text-2xl font-bold text-green-800 dark:text-green-200">{mockReportData.passedChecks}</p>
                    </div>
                    <CheckCircle2 className="h-8 w-8 text-green-600 dark:text-green-400" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-950/50 dark:to-yellow-900/50 border-yellow-200 dark:border-yellow-800">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-yellow-700 dark:text-yellow-300 font-medium">Warnings</p>
                      <p className="text-2xl font-bold text-yellow-800 dark:text-yellow-200">{mockReportData.warningChecks}</p>
                    </div>
                    <AlertTriangle className="h-8 w-8 text-yellow-600 dark:text-yellow-400" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950/50 dark:to-red-900/50 border-red-200 dark:border-red-800">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-red-700 dark:text-red-300 font-medium">Failed</p>
                      <p className="text-2xl font-bold text-red-800 dark:text-red-200">{mockReportData.failedChecks}</p>
                    </div>
                    <XCircle className="h-8 w-8 text-red-600 dark:text-red-400" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/50 dark:to-blue-900/50 border-blue-200 dark:border-blue-800">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-blue-700 dark:text-blue-300 font-medium">Success Rate</p>
                      <p className="text-2xl font-bold text-blue-800 dark:text-blue-200">{successRate}%</p>
                    </div>
                    <div className="w-8 h-8 flex items-center justify-center">
                      <Progress value={successRate} className="w-6 h-6" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              {/* Trends Over Time - Line Chart */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Quality Trends (Last 6 Days)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={mockReportData.trendsData}>
                      <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                      <XAxis 
                        dataKey="date" 
                        className="text-xs fill-muted-foreground" 
                        tick={{ fontSize: 12 }}
                      />
                      <YAxis 
                        className="text-xs fill-muted-foreground" 
                        tick={{ fontSize: 12 }}
                      />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'hsl(var(--background))', 
                          border: '1px solid hsl(var(--border))',
                          borderRadius: '8px'
                        }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="passed" 
                        stroke="#22c55e" 
                        strokeWidth={2}
                        name="Passed"
                      />
                      <Line 
                        type="monotone" 
                        dataKey="warnings" 
                        stroke="#f59e0b" 
                        strokeWidth={2}
                        name="Warnings"
                      />
                      <Line 
                        type="monotone" 
                        dataKey="failed" 
                        stroke="#ef4444" 
                        strokeWidth={2}
                        name="Failed"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Issues by Category - Pie Chart */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5" />
                    Issues by Category
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={mockReportData.issuesByCategory}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {mockReportData.issuesByCategory.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'hsl(var(--background))', 
                          border: '1px solid hsl(var(--border))',
                          borderRadius: '8px'
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="flex flex-wrap gap-4 mt-4 justify-center">
                    {mockReportData.issuesByCategory.map((entry, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div 
                          className="w-3 h-3 rounded-full" 
                          style={{ backgroundColor: entry.color }}
                        />
                        <span className="text-sm text-muted-foreground">
                          {entry.name} ({entry.value})
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Performance by Level - Bar Chart */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  Performance by Building Level
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={350}>
                  <BarChart data={mockReportData.performanceByLevel} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis 
                      dataKey="level" 
                      className="text-xs fill-muted-foreground" 
                      tick={{ fontSize: 12 }}
                    />
                    <YAxis 
                      className="text-xs fill-muted-foreground" 
                      tick={{ fontSize: 12 }}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--background))', 
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px'
                      }}
                    />
                    <Bar dataKey="passed" stackId="a" fill="#22c55e" name="Passed" />
                    <Bar dataKey="warnings" stackId="a" fill="#f59e0b" name="Warnings" />
                    <Bar dataKey="failed" stackId="a" fill="#ef4444" name="Failed" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Success Rate Trend - Area Chart */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Success Rate Trend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={mockReportData.trendsData}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis 
                      dataKey="date" 
                      className="text-xs fill-muted-foreground" 
                      tick={{ fontSize: 12 }}
                    />
                    <YAxis 
                      domain={[85, 100]}
                      className="text-xs fill-muted-foreground" 
                      tick={{ fontSize: 12 }}
                      tickFormatter={(value) => `${value}%`}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--background))', 
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px'
                      }}
                      formatter={(value, name) => [`${Math.round((value as number / mockReportData.totalChecks) * 100)}%`, 'Success Rate']}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="passed" 
                      stroke="#22c55e" 
                      fill="#22c55e" 
                      fillOpacity={0.3}
                      name="Success Rate"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Issues List */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Issues Found</span>
                  <Badge variant="outline">{mockReportData.issues.length} issues</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {mockReportData.issues.map((issue) => (
                  <div key={issue.id} className="flex items-start space-x-4 p-4 rounded-lg border border-border/50 bg-card/50">
                    <div className="flex-shrink-0">
                      {issue.type === "error" ? (
                        <XCircle className="h-5 w-5 text-red-500" />
                      ) : (
                        <AlertTriangle className="h-5 w-5 text-yellow-500" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-semibold text-sm">{issue.title}</h4>
                        <Badge variant={issue.severity === "high" ? "destructive" : "secondary"} className="text-xs">
                          {issue.severity}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{issue.description}</p>
                      <p className="text-xs text-muted-foreground">{issue.location}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Report Metadata */}
            <div className="mt-8 text-sm text-muted-foreground space-y-1">
              <p>Last run: {new Date(service.lastRun).toLocaleString()}</p>
              <p>Next scheduled run: {new Date(service.nextRun).toLocaleString()}</p>
              <p>Report generated on: {new Date().toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}