"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Upload, MapPin, DollarSign, TrendingUp, AlertCircle } from "lucide-react"
import Link from "next/link"

export default function ListCropPage() {
  const [selectedCrop, setSelectedCrop] = useState("")
  const [quantity, setQuantity] = useState("")
  const [price, setPrice] = useState("")
  const [location, setLocation] = useState("")

  const cropTypes = [
    "Tomatoes",
    "Plantains",
    "Maize",
    "Cocoa",
    "Coffee",
    "Cassava",
    "Yams",
    "Sweet Potatoes",
    "Beans",
    "Groundnuts",
    "Rice",
    "Bananas",
  ]

  const suggestedPrice =
    selectedCrop === "Tomatoes"
      ? "750-850 FCFA/kg"
      : selectedCrop === "Plantains"
        ? "1,100-1,300 FCFA/bunch"
        : selectedCrop === "Maize"
          ? "400-500 FCFA/kg"
          : null

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
          <Button variant="outline" asChild>
            <Link href="/farmers">Back to Dashboard</Link>
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">List Your Crop</h1>
          <p className="text-gray-600">Create a new listing to connect with potential buyers</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Crop Details</CardTitle>
                <CardDescription>Provide information about your crop to attract buyers</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Crop Type */}
                <div className="space-y-2">
                  <Label htmlFor="crop-type">Crop Type *</Label>
                  <Select value={selectedCrop} onValueChange={setSelectedCrop}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your crop type" />
                    </SelectTrigger>
                    <SelectContent>
                      {cropTypes.map((crop) => (
                        <SelectItem key={crop} value={crop}>
                          {crop}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Quantity */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="quantity">Quantity *</Label>
                    <Input
                      id="quantity"
                      placeholder="e.g., 500"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="unit">Unit</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select unit" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="kg">Kilograms (kg)</SelectItem>
                        <SelectItem value="tons">Tons</SelectItem>
                        <SelectItem value="bunches">Bunches</SelectItem>
                        <SelectItem value="bags">Bags</SelectItem>
                        <SelectItem value="pieces">Pieces</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Price */}
                <div className="space-y-2">
                  <Label htmlFor="price">Price per Unit (FCFA) *</Label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="price"
                      className="pl-10"
                      placeholder="e.g., 800"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </div>
                  {suggestedPrice && (
                    <div className="flex items-center space-x-2 text-sm text-green-600">
                      <TrendingUp className="w-4 h-4" />
                      <span>Market range: {suggestedPrice}</span>
                    </div>
                  )}
                </div>

                {/* Location */}
                <div className="space-y-2">
                  <Label htmlFor="location">Location *</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="location"
                      className="pl-10"
                      placeholder="e.g., Douala, Littoral Region"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe the quality, harvest date, organic certification, etc."
                    rows={4}
                  />
                </div>

                {/* Photo Upload */}
                <div className="space-y-2">
                  <Label>Crop Photos</Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                    <p className="text-gray-600 mb-2">Upload photos of your crop</p>
                    <p className="text-sm text-gray-500">PNG, JPG up to 10MB each</p>
                    <Button variant="outline" className="mt-4">
                      Choose Files
                    </Button>
                  </div>
                </div>

                {/* Contact Preferences */}
                <div className="space-y-2">
                  <Label>Contact Preferences</Label>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="sms" className="rounded" defaultChecked />
                      <Label htmlFor="sms" className="text-sm">
                        SMS notifications
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="calls" className="rounded" defaultChecked />
                      <Label htmlFor="calls" className="text-sm">
                        Phone calls
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="whatsapp" className="rounded" />
                      <Label htmlFor="whatsapp" className="text-sm">
                        WhatsApp messages
                      </Label>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-4 pt-6">
                  <Button className="flex-1">Publish Listing</Button>
                  <Button variant="outline">Save as Draft</Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Pricing Tips */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                  <span>Pricing Tips</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-green-50 rounded-lg">
                  <p className="text-sm text-green-800">
                    <strong>Market Average:</strong> Check current market prices before setting your price
                  </p>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Quality Premium:</strong> High-quality crops can command 10-20% higher prices
                  </p>
                </div>
                <div className="p-3 bg-yellow-50 rounded-lg">
                  <p className="text-sm text-yellow-800">
                    <strong>Seasonal Demand:</strong> Prices vary by season and local demand
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Listing Benefits */}
            <Card>
              <CardHeader>
                <CardTitle>Why List on AgriHub+?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <p className="text-sm">Direct access to verified buyers</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <p className="text-sm">No middleman commissions</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <p className="text-sm">Secure mobile money payments</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <p className="text-sm">Real-time market insights</p>
                </div>
              </CardContent>
            </Card>

            {/* Support */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <AlertCircle className="w-5 h-5 text-blue-600" />
                  <span>Need Help?</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-3">
                  Our support team is here to help you create the perfect listing.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Contact Support
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
