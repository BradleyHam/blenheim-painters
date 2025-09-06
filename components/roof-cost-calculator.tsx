"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"

function Spinner() {
  return (
    <svg className="animate-spin mr-2 h-5 w-5 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
    </svg>
  )
}

export default function RoofCalculator() {
  const [roofSize, setRoofSize] = useState<number>(60)
  const [roofType, setRoofType] = useState<string>("Tile")
  const [roofCondition, setRoofCondition] = useState<string>("Generally in good condition")
  const [roofAngle, setRoofAngle] = useState<string>("Minimal/Flat")
  const [scaffolding, setScaffolding] = useState<boolean>(false)
  const [firstName, setFirstName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>("idle")
  const [errorMsg, setErrorMsg] = useState<string>("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg("")
    try {
      const res = await fetch("/api/roof-cost", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          roofSize,
          roofType,
          roofCondition,
          roofAngle,
          scaffolding,
          firstName,
          email
        })
      })
      const data = await res.json()
      if (res.ok && data.success) {
        setStatus('success')
      } else {
        setStatus('error')
        setErrorMsg(data.error || 'Something went wrong. Please try again.')
      }
    } catch (err: any) {
      setStatus('error')
      setErrorMsg(err.message || 'Something went wrong. Please try again.')
    }
  }

  return (
    <Card className="w-full">
      <CardContent className="pt-6">
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Roof Painting Cost Calculator (NZ)</h1>
          </div>

          <div className="text-gray-700">
            <p>
              Quick take: Painting your roof every 8 to 12 years keeps rust, moss, and UV damage at bay and boosts your home's street appeal. Use our calculator below for a no-nonsense price guide. Submit your details and Daniel will follow up with a firm quote.
            </p>
            <p className="mt-4">
              Note: The calculator gives a general estimate based on real local rates. Each job is unique, so Daniel will confirm details before you commit.
            </p>
          </div>

          {status === 'success' ? (
            <div className="p-6 bg-green-100 text-green-800 rounded-lg text-center">
              <h2 className="text-xl font-bold mb-2">Request Received!</h2>
              <p>Thank you, {firstName}! We'll be in touch with a free estimate ASAP.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label htmlFor="roof-size">Size of Roof (SQM)</Label>
                  <span className="font-medium">{roofSize}</span>
                </div>
                <Slider
                  id="roof-size"
                  min={10}
                  max={300}
                  step={1}
                  value={[roofSize]}
                  onValueChange={(value) => setRoofSize(value[0])}
                  className="py-4"
                />
                <p className="text-sm text-gray-500">
                  This gives us a rough idea of the area we're quoting for.
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="roof-type">Roof Type</Label>
                <Select value={roofType} onValueChange={setRoofType}>
                  <SelectTrigger id="roof-type" className="w-full">
                    <SelectValue placeholder="Select roof type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Tile">Tile</SelectItem>
                    <SelectItem value="Iron">Iron</SelectItem>
                    <SelectItem value="Decramastic">Decramastic</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="roof-condition">Condition of the Roof</Label>
                <Select value={roofCondition} onValueChange={setRoofCondition}>
                  <SelectTrigger id="roof-condition" className="w-full">
                    <SelectValue placeholder="Select roof condition" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Generally in good condition">Generally in good condition</SelectItem>
                    <SelectItem value="Rust or moss present">Rust or moss present</SelectItem>
                    <SelectItem value="Peeling paint or minor repairs">Peeling paint or minor repairs</SelectItem>
                    <SelectItem value="Poor condition">Poor condition</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-sm text-gray-500">
                  This affects prep time and material costs.
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="roof-angle">Roof Pitch</Label>
                <Select value={roofAngle} onValueChange={setRoofAngle}>
                  <SelectTrigger id="roof-angle" className="w-full">
                    <SelectValue placeholder="Select roof pitch" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Minimal/Flat">Minimal/Flat</SelectItem>
                    <SelectItem value="Standard">Standard</SelectItem>
                    <SelectItem value="Steep">Steep</SelectItem>
                    <SelectItem value="Very Steep">Very Steep</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center space-x-2">
                <Label htmlFor="scaffolding">Will scaffolding be required?</Label>
                <Switch id="scaffolding" checked={scaffolding} onCheckedChange={setScaffolding} />
              </div>

              <div className="pt-6 border-t border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Where should we send your estimate?</h2>
                <p className="text-gray-700 mb-4">
                  Your estimate will be sent directly to your inbox. If you don't see it within a few minutes, please check your junk mail folder.
                </p>

                <div className="space-y-4">
                  <div>
                    <Input
                      id="first-name"
                      placeholder="First Name*"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Email Address*"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-gold hover:bg-gold-dark text-white" disabled={status==='loading'}>
                    {status === 'loading' && <Spinner />}
                    {status === 'loading' ? 'Sending...' : 'Get My Estimate'}
                  </Button>
                  {status === 'error' && (
                    <div className="text-red-600 text-sm mt-2">{errorMsg}</div>
                  )}
                </div>
              </div>
            </form>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
