import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plus, TrendingUp, MessageSquare, DollarSign, Users, BarChart3 } from "lucide-react"
import Link from "next/link"

export default function FarmersPage() {
  const recentListings = [
    { id: 1, crop: "Tomatoes", quantity: "500kg", price: "800 FCFA/kg", status: "Active", buyers: 3 },
    { id: 2, crop: "Plantains", quantity: "200 bunches", price: "1,200 FCFA/bunch", status: "Sold", buyers: 1 },
    { id: 3, crop: "Maize", quantity: "1,000kg", price: "450 FCFA/kg", status: "Active", buyers: 5 },
  ]

  const marketAlerts = [
    { crop: "Cocoa", trend: "up", price: "2,800 FCFA/kg", change: "+5%" },
    { crop: "Coffee", trend: "down", price: "3,200 FCFA/kg", change: "-2%" },
    { crop: "Plantains", trend: "up", price: "1,150 FCFA/bunch", change: "+8%" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">A+</span>
            </div>
            <span className="text-xl font-bold text-green-800">AgriHub+</span>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <MessageSquare className="w-4 h-4 mr-2" />
              Messages
            </Button>
            <Button size="sm">
              <Plus className="w-4 h-4 mr-2" />
              List Crop
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, Jean!</h1>
          <p className="text-gray-600">Manage your crops, track sales, and connect with buyers.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Earnings</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₣2,450,000</div>
              <p className="text-xs text-muted-foreground">+12% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Listings</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">2 new this week</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Interested Buyers</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">23</div>
              <p className="text-xs text-muted-foreground">+5 new inquiries</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">87%</div>
              <p className="text-xs text-muted-foreground">Above average</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Listings */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Your Crop Listings</CardTitle>
                  <Button size="sm" asChild>
                    <Link href="/farmers/list-crop">
                      <Plus className="w-4 h-4 mr-2" />
                      Add New
                    </Link>
                  </Button>
                </div>
                <CardDescription>Manage your current crop listings and track buyer interest</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentListings.map((listing) => (
                    <div key={listing.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h3 className="font-medium">{listing.crop}</h3>
                          <Badge variant={listing.status === "Active" ? "default" : "secondary"}>
                            {listing.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600">
                          {listing.quantity} • {listing.price}
                        </p>
                        <p className="text-xs text-gray-500">{listing.buyers} interested buyers</p>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Market Alerts */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Market Alerts</CardTitle>
                <CardDescription>Real-time price updates for your crops</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {marketAlerts.map((alert, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <h4 className="font-medium">{alert.crop}</h4>
                        <p className="text-sm text-gray-600">{alert.price}</p>
                      </div>
                      <div
                        className={`flex items-center space-x-1 ${
                          alert.trend === "up" ? "text-green-600" : "text-red-600"
                        }`}
                      >
                        <TrendingUp className={`w-4 h-4 ${alert.trend === "down" ? "rotate-180" : ""}`} />
                        <span className="text-sm font-medium">{alert.change}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start" variant="outline" asChild>
                  <Link href="/farmers/list-crop">
                    <Plus className="w-4 h-4 mr-2" />
                    List New Crop
                  </Link>
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Check Messages
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  View Analytics
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Price Recommendations
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
