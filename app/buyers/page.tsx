"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, MapPin, Phone, MessageSquare, Star, Filter, ShoppingCart } from "lucide-react"

export default function BuyersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedRegion, setSelectedRegion] = useState("")
  const [selectedCrop, setSelectedCrop] = useState("")

  const cropListings = [
    {
      id: 1,
      farmer: "Jean Mballa",
      crop: "Tomatoes",
      quantity: "500kg",
      price: "800 FCFA/kg",
      location: "Douala, Littoral",
      rating: 4.8,
      reviews: 23,
      harvestDate: "2024-01-15",
      organic: true,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      farmer: "Marie Nguema",
      crop: "Plantains",
      quantity: "200 bunches",
      price: "1,200 FCFA/bunch",
      location: "Yaoundé, Centre",
      rating: 4.9,
      reviews: 31,
      harvestDate: "2024-01-20",
      organic: false,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      farmer: "Paul Atangana",
      crop: "Maize",
      quantity: "1,000kg",
      price: "450 FCFA/kg",
      location: "Bamenda, Northwest",
      rating: 4.7,
      reviews: 18,
      harvestDate: "2024-01-10",
      organic: true,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 4,
      farmer: "Grace Fon",
      crop: "Cocoa",
      quantity: "300kg",
      price: "2,800 FCFA/kg",
      location: "Buea, Southwest",
      rating: 5.0,
      reviews: 12,
      harvestDate: "2024-01-18",
      organic: true,
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const regions = [
    "All Regions",
    "Centre",
    "Littoral",
    "Northwest",
    "Southwest",
    "North",
    "Adamawa",
    "East",
    "South",
    "Far North",
    "West",
  ]
  const cropTypes = [
    "All Crops",
    "Tomatoes",
    "Plantains",
    "Maize",
    "Cocoa",
    "Coffee",
    "Cassava",
    "Yams",
    "Sweet Potatoes",
  ]

  const filteredListings = cropListings.filter((listing) => {
    const matchesSearch =
      listing.crop.toLowerCase().includes(searchTerm.toLowerCase()) ||
      listing.farmer.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesRegion =
      selectedRegion === "" || selectedRegion === "All Regions" || listing.location.includes(selectedRegion)
    const matchesCrop = selectedCrop === "" || selectedCrop === "All Crops" || listing.crop === selectedCrop
    return matchesSearch && matchesRegion && matchesCrop
  })

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
              <ShoppingCart className="w-4 h-4 mr-2" />
              Cart (3)
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Find Fresh Crops</h1>
          <p className="text-gray-600">Connect directly with farmers across Cameroon</p>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search crops or farmers..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Select value={selectedCrop} onValueChange={setSelectedCrop}>
                <SelectTrigger>
                  <SelectValue placeholder="Crop Type" />
                </SelectTrigger>
                <SelectContent>
                  {cropTypes.map((crop) => (
                    <SelectItem key={crop} value={crop}>
                      {crop}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                <SelectTrigger>
                  <SelectValue placeholder="Region" />
                </SelectTrigger>
                <SelectContent>
                  {regions.map((region) => (
                    <SelectItem key={region} value={region}>
                      {region}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button>
                <Filter className="w-4 h-4 mr-2" />
                More Filters
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Available Crops ({filteredListings.length})</h2>
          <Select defaultValue="newest">
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="rating">Highest Rated</SelectItem>
              <SelectItem value="distance">Nearest First</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Crop Listings */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredListings.map((listing) => (
            <Card key={listing.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gray-200 relative">
                <img
                  src={listing.image || "/placeholder.svg"}
                  alt={listing.crop}
                  className="w-full h-full object-cover"
                />
                {listing.organic && <Badge className="absolute top-2 left-2 bg-green-600">Organic</Badge>}
              </div>
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-lg">{listing.crop}</h3>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-gray-600">{listing.rating}</span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-2">by {listing.farmer}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Quantity:</span>
                    <span className="text-sm font-medium">{listing.quantity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Price:</span>
                    <span className="text-sm font-medium text-green-600">{listing.price}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-3 h-3 text-gray-400" />
                    <span className="text-sm text-gray-600">{listing.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Harvest Date:</span>
                    <span className="text-sm">{new Date(listing.harvestDate).toLocaleDateString()}</span>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button size="sm" className="flex-1">
                    Contact Farmer
                  </Button>
                  <Button size="sm" variant="outline">
                    <Phone className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="outline">
                    <MessageSquare className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <Button variant="outline">Load More Listings</Button>
        </div>
      </div>
    </div>
  )
}
