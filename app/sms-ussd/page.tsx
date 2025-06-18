"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Smartphone, MessageSquare, Phone, ArrowRight, Send } from "lucide-react"
import Link from "next/link"

export default function SmsUssdPage() {
  const [currentScreen, setCurrentScreen] = useState("main")
  const [ussdInput, setUssdInput] = useState("")
  const [smsMessages, setSmsMessages] = useState([
    {
      id: 1,
      from: "AgriHub+",
      message: "Welcome to AgriHub+! Your account is active. Reply HELP for commands.",
      time: "10:30 AM",
      type: "received",
    },
  ])
  const [newSmsMessage, setNewSmsMessage] = useState("")

  const ussdMenus = {
    main: {
      title: "AgriHub+ Main Menu",
      options: [
        { key: "1", text: "List My Crops", action: "list-crops" },
        { key: "2", text: "Check Prices", action: "check-prices" },
        { key: "3", text: "View Requests", action: "view-requests" },
        { key: "4", text: "My Account", action: "account" },
        { key: "5", text: "Help", action: "help" },
        { key: "0", text: "Exit", action: "exit" },
      ],
    },
    "list-crops": {
      title: "List Your Crops",
      options: [
        { key: "1", text: "Tomatoes", action: "crop-tomatoes" },
        { key: "2", text: "Plantains", action: "crop-plantains" },
        { key: "3", text: "Maize", action: "crop-maize" },
        { key: "4", text: "Cocoa", action: "crop-cocoa" },
        { key: "9", text: "Back", action: "main" },
        { key: "0", text: "Exit", action: "exit" },
      ],
    },
    "check-prices": {
      title: "Market Prices Today",
      content: [
        "Tomatoes: 750-850 FCFA/kg",
        "Plantains: 1,100-1,300 FCFA/bunch",
        "Maize: 400-500 FCFA/kg",
        "Cocoa: 2,800 FCFA/kg",
        "",
        "Prices updated: 2 hours ago",
      ],
      options: [
        { key: "1", text: "Get Price Alerts", action: "price-alerts" },
        { key: "9", text: "Back", action: "main" },
        { key: "0", text: "Exit", action: "exit" },
      ],
    },
    "view-requests": {
      title: "Buyer Requests",
      content: [
        "1. Need 500kg Tomatoes - Douala",
        "   Price: 800 FCFA/kg",
        "   Contact: 237698123456",
        "",
        "2. Want 200 bunches Plantains",
        "   Price: 1,200 FCFA/bunch",
        "   Contact: 237677987654",
      ],
      options: [
        { key: "1", text: "Respond to Request 1", action: "respond-1" },
        { key: "2", text: "Respond to Request 2", action: "respond-2" },
        { key: "9", text: "Back", action: "main" },
        { key: "0", text: "Exit", action: "exit" },
      ],
    },
    "crop-tomatoes": {
      title: "List Tomatoes",
      content: ["Enter quantity in kg:", "Example: 500", "", "Current market price:", "750-850 FCFA/kg"],
      options: [
        { key: "9", text: "Back", action: "list-crops" },
        { key: "0", text: "Exit", action: "exit" },
      ],
    },
  }

  const smsCommands = [
    { command: "PRICE", description: "Get current market prices", example: "PRICE TOMATOES" },
    { command: "LIST", description: "List your crops for sale", example: "LIST TOMATOES 500KG 800" },
    { command: "REQUESTS", description: "View buyer requests", example: "REQUESTS" },
    { command: "BALANCE", description: "Check your account balance", example: "BALANCE" },
    { command: "HELP", description: "Get help and commands", example: "HELP" },
  ]

  const handleUssdInput = (input: string) => {
    const currentMenu = ussdMenus[currentScreen]
    const selectedOption = currentMenu.options?.find((opt) => opt.key === input)

    if (selectedOption) {
      if (selectedOption.action === "exit") {
        setCurrentScreen("main")
        setUssdInput("")
        return
      }
      setCurrentScreen(selectedOption.action)
    }
    setUssdInput("")
  }

  const sendSmsMessage = () => {
    if (!newSmsMessage.trim()) return

    const newMessage = {
      id: smsMessages.length + 1,
      from: "You",
      message: newSmsMessage,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      type: "sent" as const,
    }

    setSmsMessages([...smsMessages, newMessage])

    // Simulate response based on command
    setTimeout(() => {
      let response = ""
      const command = newSmsMessage.toUpperCase()

      if (command.includes("PRICE")) {
        response =
          "Current prices: Tomatoes 800 FCFA/kg, Plantains 1,200 FCFA/bunch, Maize 450 FCFA/kg. Updated 1hr ago."
      } else if (command.includes("LIST")) {
        response =
          "Your crop listing has been created! Buyers will be notified. You'll receive SMS when someone is interested."
      } else if (command.includes("REQUESTS")) {
        response =
          "2 new buyer requests: 1) 500kg Tomatoes in Douala 2) 200 bunches Plantains in Yaoundé. Reply REQ1 or REQ2 for details."
      } else if (command.includes("BALANCE")) {
        response =
          "Account balance: 245,000 FCFA. Last transaction: +50,000 FCFA (Tomato sale). Mobile Money: MTN 237698123456"
      } else if (command.includes("HELP")) {
        response =
          "AgriHub+ Commands: PRICE (market prices), LIST (sell crops), REQUESTS (buyer needs), BALANCE (account info). Need help? Call 237-AGRIHUB"
      } else {
        response = "Command not recognized. Reply HELP for available commands or call 237-AGRIHUB for assistance."
      }

      const responseMessage = {
        id: smsMessages.length + 2,
        from: "AgriHub+",
        message: response,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        type: "received" as const,
      }

      setSmsMessages((prev) => [...prev, responseMessage])
    }, 1500)

    setNewSmsMessage("")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">A+</span>
            </div>
            <span className="text-xl font-bold text-green-800">AgriHub+</span>
          </Link>
          <Button variant="outline" asChild>
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">SMS & USSD Access</h1>
          <p className="text-gray-600">Experience how farmers with basic phones can use AgriHub+</p>
        </div>

        {/* Access Methods */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <Phone className="w-8 h-8 text-green-600 mb-2" />
              <CardTitle>USSD Codes</CardTitle>
              <CardDescription>Interactive menus on any phone</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <p>
                  <strong>*123*456#</strong> - Main Menu
                </p>
                <p>
                  <strong>*123*457#</strong> - Quick Prices
                </p>
                <p>
                  <strong>*123*458#</strong> - List Crops
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <MessageSquare className="w-8 h-8 text-blue-600 mb-2" />
              <CardTitle>SMS Commands</CardTitle>
              <CardDescription>Text-based interactions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <p>
                  <strong>Send to 1234:</strong>
                </p>
                <p>PRICE - Market prices</p>
                <p>LIST - Sell crops</p>
                <p>HELP - All commands</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Smartphone className="w-8 h-8 text-purple-600 mb-2" />
              <CardTitle>Voice Calls</CardTitle>
              <CardDescription>For illiterate farmers</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <p>
                  <strong>Call 237-AGRIHUB</strong>
                </p>
                <p>Automated voice menu</p>
                <p>Live agent support</p>
                <p>Available 24/7</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* USSD Simulator */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>USSD Simulator</span>
              </CardTitle>
              <CardDescription>Try the USSD interface (*123*456#)</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-black text-green-400 p-4 rounded-lg font-mono text-sm min-h-[400px]">
                <div className="mb-4">
                  <div className="text-center border-b border-green-400 pb-2 mb-4">
                    {ussdMenus[currentScreen].title}
                  </div>

                  {ussdMenus[currentScreen].content && (
                    <div className="mb-4">
                      {ussdMenus[currentScreen].content.map((line, index) => (
                        <div key={index}>{line}</div>
                      ))}
                    </div>
                  )}

                  {ussdMenus[currentScreen].options && (
                    <div className="space-y-1">
                      {ussdMenus[currentScreen].options.map((option, index) => (
                        <div key={index}>
                          {option.key}. {option.text}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="border-t border-green-400 pt-2">
                  <div className="flex items-center space-x-2">
                    <span>Enter choice:</span>
                    <Input
                      value={ussdInput}
                      onChange={(e) => setUssdInput(e.target.value)}
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          handleUssdInput(ussdInput)
                        }
                      }}
                      className="bg-transparent border-green-400 text-green-400 w-16 text-center"
                      maxLength={1}
                    />
                    <Button
                      size="sm"
                      onClick={() => handleUssdInput(ussdInput)}
                      className="bg-green-600 hover:bg-green-700"
                    >
                      OK
                    </Button>
                  </div>
                </div>
              </div>

              <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>How it works:</strong> Farmers dial *123*456# on any phone. No internet required! The telecom
                  network routes the request to AgriHub+ servers.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* SMS Simulator */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MessageSquare className="w-5 h-5" />
                <span>SMS Simulator</span>
              </CardTitle>
              <CardDescription>Try SMS commands (Send to 1234)</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-100 p-4 rounded-lg h-80 overflow-y-auto mb-4">
                <div className="space-y-3">
                  {smsMessages.map((msg) => (
                    <div key={msg.id} className={`flex ${msg.type === "sent" ? "justify-end" : "justify-start"}`}>
                      <div
                        className={`max-w-xs p-3 rounded-lg ${
                          msg.type === "sent" ? "bg-green-600 text-white" : "bg-white border"
                        }`}
                      >
                        <div className="text-sm font-medium mb-1">{msg.from}</div>
                        <div className="text-sm">{msg.message}</div>
                        <div className="text-xs opacity-70 mt-1">{msg.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex space-x-2">
                <Input
                  placeholder="Type SMS command..."
                  value={newSmsMessage}
                  onChange={(e) => setNewSmsMessage(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      sendSmsMessage()
                    }
                  }}
                />
                <Button onClick={sendSmsMessage}>
                  <Send className="w-4 h-4" />
                </Button>
              </div>

              <div className="mt-4">
                <h4 className="font-medium mb-2">Quick Commands:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {smsCommands.slice(0, 4).map((cmd, index) => (
                    <Button key={index} variant="outline" size="sm" onClick={() => setNewSmsMessage(cmd.example)}>
                      {cmd.command}
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* SMS Commands Reference */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>SMS Commands Reference</CardTitle>
            <CardDescription>Complete list of available SMS commands for farmers</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {smsCommands.map((cmd, index) => (
                <div key={index} className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{cmd.command}</Badge>
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{cmd.description}</p>
                  <p className="text-xs font-mono bg-gray-100 p-2 rounded">Example: {cmd.example}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Benefits Section */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Why SMS & USSD Matter</CardTitle>
            <CardDescription>Ensuring no farmer is left behind</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Phone className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-medium mb-2">Universal Access</h3>
                <p className="text-sm text-gray-600">
                  Works on any phone, even the most basic models. No internet or smartphone required.
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <MessageSquare className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-medium mb-2">Low Cost</h3>
                <p className="text-sm text-gray-600">
                  SMS costs are minimal, and USSD sessions are often free or very cheap.
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Smartphone className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-medium mb-2">Reliable</h3>
                <p className="text-sm text-gray-600">
                  Works even in areas with poor internet connectivity or during network congestion.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
