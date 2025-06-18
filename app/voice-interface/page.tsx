"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, PhoneCall, Volume2, VolumeX, RotateCcw, Mic, MicOff, Languages, Headphones } from "lucide-react"
import Link from "next/link"

interface VoicePrompt {
  id: string
  text: string
  audio?: string
  options?: { key: string; text: string; next: string }[]
  action?: string
}

export default function VoiceInterfacePage() {
  const [currentPrompt, setCurrentPrompt] = useState("welcome")
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState("english")
  const [isListening, setIsListening] = useState(false)
  const [callDuration, setCallDuration] = useState(0)
  const [isCallActive, setIsCallActive] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)
  const intervalRef = useRef<NodeJS.Timeout>()

  const languages = {
    english: "English",
    french: "Français",
    fulfulde: "Fulfulde",
    ewondo: "Ewondo",
    duala: "Duala",
  }

  const voicePrompts: Record<string, VoicePrompt> = {
    welcome: {
      id: "welcome",
      text:
        selectedLanguage === "french"
          ? "Bienvenue à AgriHub+. Appuyez sur 1 pour le français, 2 pour l'anglais, 3 pour le fulfulde, ou restez en ligne pour l'assistance."
          : selectedLanguage === "fulfulde"
            ? "Jam tan e AgriHub+. Dobo 1 ngam Fulfulde, 2 ngam Engele, 3 ngam Farayse, walla hol e laawol ngam ballal."
            : "Welcome to AgriHub+. Press 1 for English, 2 for French, 3 for Fulfulde, or stay on the line for assistance. To continue in English, press 1.",
      options: [
        { key: "1", text: "English", next: "main-menu" },
        { key: "2", text: "Français", next: "main-menu" },
        { key: "3", text: "Fulfulde", next: "main-menu" },
        { key: "0", text: "Live Agent", next: "agent" },
      ],
    },
    "main-menu": {
      id: "main-menu",
      text:
        selectedLanguage === "french"
          ? "Menu principal. Appuyez sur 1 pour vendre vos cultures, 2 pour les prix du marché, 3 pour les demandes d'acheteurs, 4 pour votre compte, ou 0 pour l'aide."
          : selectedLanguage === "fulfulde"
            ? "Jaɓɓorgo mawɗo. Dobo 1 ngam suudu golle maa, 2 ngam keerol suudu, 3 ngam ɗaɓɓugo njamndi, 4 ngam konte maa, walla 0 ngam ballal."
            : "Main menu. Press 1 to sell your crops, 2 for market prices, 3 for buyer requests, 4 for your account, or 0 for help.",
      options: [
        { key: "1", text: "Sell Crops", next: "sell-crops" },
        { key: "2", text: "Market Prices", next: "market-prices" },
        { key: "3", text: "Buyer Requests", next: "buyer-requests" },
        { key: "4", text: "My Account", next: "account" },
        { key: "0", text: "Help", next: "help" },
      ],
    },
    "sell-crops": {
      id: "sell-crops",
      text:
        selectedLanguage === "french"
          ? "Que voulez-vous vendre? Appuyez sur 1 pour les tomates, 2 pour les plantains, 3 pour le maïs, 4 pour le cacao, ou 9 pour retourner."
          : selectedLanguage === "fulfulde"
            ? "Ko njiɗ-ɗaa suude? Dobo 1 ngam tomaati, 2 ngam plantain, 3 ngam masara, 4 ngam kakaw, walla 9 ngam rutto."
            : "What would you like to sell? Press 1 for tomatoes, 2 for plantains, 3 for maize, 4 for cocoa, or 9 to go back.",
      options: [
        { key: "1", text: "Tomatoes", next: "crop-details" },
        { key: "2", text: "Plantains", next: "crop-details" },
        { key: "3", text: "Maize", next: "crop-details" },
        { key: "4", text: "Cocoa", next: "crop-details" },
        { key: "9", text: "Back", next: "main-menu" },
      ],
    },
    "crop-details": {
      id: "crop-details",
      text:
        selectedLanguage === "french"
          ? "Parfait! Maintenant, dites-moi combien de kilogrammes vous avez. Par exemple, dites 'cinq cents kilogrammes' ou appuyez sur 1 pour parler à un agent."
          : selectedLanguage === "fulfulde"
            ? "Ɓurɗo! Jooni, haalan am ko foti kilo njiɗ-ɗaa jogii. Misaal, wi 'teemerre kilo' walla dobo 1 ngam haalde e ballal."
            : "Great! Now tell me how many kilograms you have. For example, say 'five hundred kilograms' or press 1 to speak with an agent.",
      options: [
        { key: "1", text: "Speak to Agent", next: "agent" },
        { key: "9", text: "Back", next: "sell-crops" },
      ],
    },
    "market-prices": {
      id: "market-prices",
      text:
        selectedLanguage === "french"
          ? "Prix du marché d'aujourd'hui: Tomates 800 francs par kilo, Plantains 1200 francs par régime, Maïs 450 francs par kilo, Cacao 2800 francs par kilo. Appuyez sur 1 pour les alertes de prix."
          : selectedLanguage === "fulfulde"
            ? "Keerol suudu hannde: Tomaati 800 faraa kilo, Plantain 1200 faraa bunch, Masara 450 faraa kilo, Kakaw 2800 faraa kilo. Dobo 1 ngam tintinol keerol."
            : "Today's market prices: Tomatoes 800 francs per kilo, Plantains 1200 francs per bunch, Maize 450 francs per kilo, Cocoa 2800 francs per kilo. Press 1 for price alerts.",
      options: [
        { key: "1", text: "Price Alerts", next: "price-alerts" },
        { key: "9", text: "Back", next: "main-menu" },
      ],
    },
    "buyer-requests": {
      id: "buyer-requests",
      text:
        selectedLanguage === "french"
          ? "Demandes d'acheteurs: Un acheteur à Douala veut 500 kilos de tomates à 800 francs le kilo. Un autre à Yaoundé veut 200 régimes de plantains. Appuyez sur 1 pour répondre."
          : selectedLanguage === "fulfulde"
            ? "Ɗaɓɓugo njamndi: Njamndiijo e Duala njiɗi 500 kilo tomaati e 800 faraa kilo. Goɗɗo e Yaoundé njiɗi 200 bunch plantain. Dobo 1 ngam jaabde."
            : "Buyer requests: A buyer in Douala wants 500 kilos of tomatoes at 800 francs per kilo. Another in Yaoundé wants 200 bunches of plantains. Press 1 to respond.",
      options: [
        { key: "1", text: "Respond", next: "respond-request" },
        { key: "9", text: "Back", next: "main-menu" },
      ],
    },
    account: {
      id: "account",
      text:
        selectedLanguage === "french"
          ? "Votre compte: Solde 245,000 francs. Dernière vente: 50,000 francs pour les tomates. Votre numéro Mobile Money: 237698123456. Appuyez sur 1 pour l'historique."
          : selectedLanguage === "fulfulde"
            ? "Konte maa: Keerol 245,000 faraa. Suudu wattinɗo: 50,000 faraa tomaati. Limoore maa Mobile Money: 237698123456. Dobo 1 ngam aslol."
            : "Your account: Balance 245,000 francs. Last sale: 50,000 francs for tomatoes. Your Mobile Money number: 237698123456. Press 1 for history.",
      options: [
        { key: "1", text: "Transaction History", next: "history" },
        { key: "9", text: "Back", next: "main-menu" },
      ],
    },
    agent: {
      id: "agent",
      text:
        selectedLanguage === "french"
          ? "Connexion à un agent en direct. Veuillez patienter... Un agent sera avec vous dans un moment. Votre temps d'attente estimé est de 2 minutes."
          : selectedLanguage === "fulfulde"
            ? "Seŋagol e ballal jooni. Tiiɗno sabbu... Ballal maa ɗon walla e sabu hakkunde. Sahaa maa sabagol ko hoɗi 2 hojomaaji."
            : "Connecting you to a live agent. Please hold... An agent will be with you shortly. Your estimated wait time is 2 minutes.",
      options: [{ key: "9", text: "Back to Menu", next: "main-menu" }],
    },
  }

  useEffect(() => {
    if (isCallActive) {
      intervalRef.current = setInterval(() => {
        setCallDuration((prev) => prev + 1)
      }, 1000)
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
      setCallDuration(0)
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isCallActive])

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const startCall = () => {
    setIsCallActive(true)
    setCurrentPrompt("welcome")
    playPrompt()
  }

  const endCall = () => {
    setIsCallActive(false)
    setIsPlaying(false)
    setCurrentPrompt("welcome")
  }

  const playPrompt = () => {
    setIsPlaying(true)
    // Simulate audio playback
    setTimeout(() => {
      setIsPlaying(false)
    }, 3000)
  }

  const handleKeyPress = (key: string) => {
    const prompt = voicePrompts[currentPrompt]
    const option = prompt.options?.find((opt) => opt.key === key)

    if (option) {
      if (option.next === "agent") {
        setCurrentPrompt("agent")
      } else {
        setCurrentPrompt(option.next)
      }
      playPrompt()
    }
  }

  const toggleListening = () => {
    setIsListening(!isListening)
    if (!isListening) {
      // Simulate voice recognition
      setTimeout(() => {
        setIsListening(false)
        // Simulate processing voice command
        setCurrentPrompt("crop-details")
        playPrompt()
      }, 3000)
    }
  }

  const currentPromptData = voicePrompts[currentPrompt]

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
          <div className="flex items-center space-x-4">
            <Button variant="outline" asChild>
              <Link href="/sms-ussd">SMS/USSD Demo</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Voice Interface Simulation</h1>
          <p className="text-gray-600">Experience how illiterate farmers can access AgriHub+ through voice calls</p>
        </div>

        {/* Language Selection */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Languages className="w-5 h-5" />
              <span>Language Support</span>
            </CardTitle>
            <CardDescription>AgriHub+ supports multiple local languages</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4">
              <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(languages).map(([code, name]) => (
                    <SelectItem key={code} value={code}>
                      {name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Badge variant="outline">{languages[selectedLanguage as keyof typeof languages]}</Badge>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Phone Simulator */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>Voice Call Simulator</span>
              </CardTitle>
              <CardDescription>Call 237-AGRIHUB (237-247-4482)</CardDescription>
            </CardHeader>
            <CardContent>
              {/* Phone Interface */}
              <div className="bg-gray-900 rounded-2xl p-6 text-white">
                {/* Call Status */}
                <div className="text-center mb-6">
                  {isCallActive ? (
                    <div>
                      <div className="text-green-400 mb-2">
                        <PhoneCall className="w-8 h-8 mx-auto animate-pulse" />
                      </div>
                      <div className="text-lg font-medium">AgriHub+ Voice System</div>
                      <div className="text-sm text-gray-400">Call Duration: {formatDuration(callDuration)}</div>
                    </div>
                  ) : (
                    <div>
                      <div className="text-gray-400 mb-2">
                        <Phone className="w-8 h-8 mx-auto" />
                      </div>
                      <div className="text-lg font-medium">Ready to Call</div>
                      <div className="text-sm text-gray-400">Dial 237-AGRIHUB</div>
                    </div>
                  )}
                </div>

                {/* Current Prompt Display */}
                {isCallActive && (
                  <div className="bg-gray-800 rounded-lg p-4 mb-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <Headphones className="w-4 h-4 text-green-400" />
                        <span className="text-sm text-green-400">Now Playing</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        {isPlaying ? (
                          <div className="flex items-center space-x-1">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            <div
                              className="w-2 h-2 bg-green-400 rounded-full animate-pulse"
                              style={{ animationDelay: "0.2s" }}
                            ></div>
                            <div
                              className="w-2 h-2 bg-green-400 rounded-full animate-pulse"
                              style={{ animationDelay: "0.4s" }}
                            ></div>
                          </div>
                        ) : (
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={playPrompt}
                            className="text-green-400 border-green-400"
                          >
                            <RotateCcw className="w-3 h-3 mr-1" />
                            Replay
                          </Button>
                        )}
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed">{currentPromptData.text}</p>
                  </div>
                )}

                {/* Keypad */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {["1", "2", "3", "4", "5", "6", "7", "8", "9", "*", "0", "#"].map((key) => (
                    <Button
                      key={key}
                      variant="outline"
                      className="h-12 text-white border-gray-600 hover:bg-gray-700"
                      onClick={() => handleKeyPress(key)}
                      disabled={!isCallActive}
                    >
                      {key}
                    </Button>
                  ))}
                </div>

                {/* Call Controls */}
                <div className="flex justify-center space-x-4">
                  {!isCallActive ? (
                    <Button onClick={startCall} className="bg-green-600 hover:bg-green-700 px-8">
                      <PhoneCall className="w-4 h-4 mr-2" />
                      Call Now
                    </Button>
                  ) : (
                    <>
                      <Button
                        variant="outline"
                        onClick={toggleListening}
                        className={`border-blue-400 ${isListening ? "bg-blue-600 text-white" : "text-blue-400"}`}
                      >
                        {isListening ? <Mic className="w-4 h-4" /> : <MicOff className="w-4 h-4" />}
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => setIsMuted(!isMuted)}
                        className={`border-yellow-400 ${isMuted ? "bg-yellow-600 text-white" : "text-yellow-400"}`}
                      >
                        {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                      </Button>
                      <Button onClick={endCall} className="bg-red-600 hover:bg-red-700">
                        End Call
                      </Button>
                    </>
                  )}
                </div>

                {/* Voice Recognition Status */}
                {isListening && (
                  <div className="mt-4 p-3 bg-blue-900 rounded-lg text-center">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <Mic className="w-4 h-4 text-blue-400 animate-pulse" />
                      <span className="text-blue-400">Listening...</span>
                    </div>
                    <p className="text-xs text-blue-300">
                      Speak clearly in {languages[selectedLanguage as keyof typeof languages]}
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Menu Options & Features */}
          <div className="space-y-6">
            {/* Current Menu Options */}
            {isCallActive && currentPromptData.options && (
              <Card>
                <CardHeader>
                  <CardTitle>Available Options</CardTitle>
                  <CardDescription>Press the corresponding number on the keypad</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {currentPromptData.options.map((option, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                        <span className="text-sm">{option.text}</span>
                        <Button size="sm" variant="outline" onClick={() => handleKeyPress(option.key)}>
                          Press {option.key}
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Voice Features */}
            <Card>
              <CardHeader>
                <CardTitle>Voice Interface Features</CardTitle>
                <CardDescription>Designed for farmers who cannot read or write</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium">Multi-language Support</h4>
                      <p className="text-sm text-gray-600">Available in English, French, Fulfulde, Ewondo, and Duala</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium">Voice Recognition</h4>
                      <p className="text-sm text-gray-600">Understands spoken numbers and basic crop names</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium">Live Agent Support</h4>
                      <p className="text-sm text-gray-600">Human assistance available 24/7 for complex queries</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium">Callback System</h4>
                      <p className="text-sm text-gray-600">System can call farmers back with important updates</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Usage Statistics */}
            <Card>
              <CardHeader>
                <CardTitle>Voice System Usage</CardTitle>
                <CardDescription>Real-world impact of voice accessibility</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">2,500+</div>
                    <div className="text-sm text-gray-600">Daily Voice Calls</div>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">85%</div>
                    <div className="text-sm text-gray-600">Illiterate Farmers Served</div>
                  </div>
                  <div className="text-center p-3 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">5</div>
                    <div className="text-sm text-gray-600">Languages Supported</div>
                  </div>
                  <div className="text-center p-3 bg-orange-50 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">98%</div>
                    <div className="text-sm text-gray-600">Call Success Rate</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Technical Implementation */}
            <Card>
              <CardHeader>
                <CardTitle>Technical Implementation</CardTitle>
                <CardDescription>How the voice system works</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <h4 className="font-medium mb-1">Voice Gateway Integration</h4>
                    <p className="text-gray-600">Connected to MTN and Orange voice networks</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <h4 className="font-medium mb-1">Speech Recognition</h4>
                    <p className="text-gray-600">AWS Transcribe with local language models</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <h4 className="font-medium mb-1">Text-to-Speech</h4>
                    <p className="text-gray-600">Amazon Polly with regional accents</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <h4 className="font-medium mb-1">Call Routing</h4>
                    <p className="text-gray-600">Amazon Connect for scalable call handling</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
