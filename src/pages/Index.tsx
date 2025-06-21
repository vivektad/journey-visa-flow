
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, Clock, Shield, ArrowRight, Building2, FileText, Scale } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Header */}
      <header className="border-b border-amber-200 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Building2 className="h-8 w-8 text-amber-600" />
            <span className="text-2xl font-bold text-amber-800">LegalFlow</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#features" className="text-amber-700 hover:text-amber-900 transition-colors">Features</a>
            <a href="#pricing" className="text-amber-700 hover:text-amber-900 transition-colors">Pricing</a>
            <a href="#about" className="text-amber-700 hover:text-amber-900 transition-colors">About</a>
          </nav>
          <Link to="/dashboard">
            <Button variant="outline" className="border-amber-300 text-amber-700 hover:bg-amber-50">
              Get Started
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge variant="secondary" className="mb-4 bg-amber-100 text-amber-800 border-amber-200">
            Streamline Your Immigration Process
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-amber-900 mb-6 leading-tight">
            Immigration Workflows
            <span className="text-orange-600"> Made Simple</span>
          </h1>
          <p className="text-xl text-amber-700 mb-8 leading-relaxed">
            Transform complex visa processes into streamlined workflows. From H1B transfers to green card applications, 
            manage every step with confidence and precision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/dashboard">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="border-amber-300 text-amber-700 hover:bg-amber-50 px-8 py-3">
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 px-4 bg-white/60">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
              The Immigration Challenge
            </h2>
            <p className="text-lg text-amber-700 max-w-3xl mx-auto">
              Companies lose millions annually due to immigration delays, compliance issues, and process inefficiencies.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-amber-200 shadow-lg">
              <CardHeader>
                <Clock className="h-12 w-12 text-orange-500 mb-4" />
                <CardTitle className="text-amber-900">Time-Consuming Processes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-amber-700">Manual workflows lead to delays, missed deadlines, and frustrated employees.</p>
              </CardContent>
            </Card>
            <Card className="border-amber-200 shadow-lg">
              <CardHeader>
                <FileText className="h-12 w-12 text-orange-500 mb-4" />
                <CardTitle className="text-amber-900">Complex Documentation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-amber-700">Navigating USCIS forms and requirements without clear guidance causes errors.</p>
              </CardContent>
            </Card>
            <Card className="border-amber-200 shadow-lg">
              <CardHeader>
                <Scale className="h-12 w-12 text-orange-500 mb-4" />
                <CardTitle className="text-amber-900">Compliance Risks</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-amber-700">One mistake can result in costly rejections and legal complications.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="features" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
              Your Complete Immigration Solution
            </h2>
            <p className="text-lg text-amber-700 max-w-3xl mx-auto">
              Streamline every aspect of your immigration process with our comprehensive workflow platform.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: CheckCircle,
                title: "Automated Workflows",
                description: "Pre-built templates for H1B, L1, O1, and green card processes."
              },
              {
                icon: Users,
                title: "Team Collaboration",
                description: "Coordinate between HR, legal, and employees seamlessly."
              },
              {
                icon: Shield,
                title: "Compliance Assured",
                description: "Built-in checks ensure USCIS compliance at every step."
              },
              {
                icon: FileText,
                title: "Document Generation",
                description: "Auto-generate forms and supporting documentation."
              },
              {
                icon: Clock,
                title: "Real-time Tracking",
                description: "Monitor case progress and receive automated updates."
              },
              {
                icon: Building2,
                title: "Enterprise Ready",
                description: "Scales with your organization's immigration needs."
              }
            ].map((feature, index) => (
              <Card key={index} className="border-amber-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <feature.icon className="h-10 w-10 text-amber-600 mb-4" />
                  <CardTitle className="text-amber-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-amber-700">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 px-4 bg-white/60">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-amber-700">
              Choose the plan that fits your organization's immigration needs.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-amber-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-amber-900">Starter</CardTitle>
                <CardDescription className="text-amber-700">Perfect for small teams</CardDescription>
                <div className="text-3xl font-bold text-amber-900">$299<span className="text-lg font-normal">/month</span></div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-amber-700">Up to 25 cases/month</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-amber-700">Basic workflow templates</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-amber-700">Email support</span>
                </div>
                <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white mt-6">
                  Start Free Trial
                </Button>
              </CardContent>
            </Card>

            <Card className="border-amber-400 shadow-xl relative">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-amber-600 text-white">
                Most Popular
              </Badge>
              <CardHeader>
                <CardTitle className="text-amber-900">Professional</CardTitle>
                <CardDescription className="text-amber-700">For growing companies</CardDescription>
                <div className="text-3xl font-bold text-amber-900">$799<span className="text-lg font-normal">/month</span></div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-amber-700">Up to 100 cases/month</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-amber-700">Advanced workflows</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-amber-700">Priority support</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-amber-700">API access</span>
                </div>
                <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white mt-6">
                  Start Free Trial
                </Button>
              </CardContent>
            </Card>

            <Card className="border-amber-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-amber-900">Enterprise</CardTitle>
                <CardDescription className="text-amber-700">For large organizations</CardDescription>
                <div className="text-3xl font-bold text-amber-900">Custom</div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-amber-700">Unlimited cases</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-amber-700">Custom workflows</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-amber-700">Dedicated support</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-amber-700">SSO integration</span>
                </div>
                <Button variant="outline" className="w-full border-amber-300 text-amber-700 hover:bg-amber-50 mt-6">
                  Contact Sales
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Immigration Process?
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            Join hundreds of companies already streamlining their visa workflows with LegalFlow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/dashboard">
              <Button size="lg" variant="secondary" className="bg-white text-amber-600 hover:bg-amber-50 px-8 py-3">
                Start Your Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8 py-3">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-amber-100 py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Building2 className="h-6 w-6" />
                <span className="text-xl font-bold">LegalFlow</span>
              </div>
              <p className="text-amber-200">
                Simplifying immigration workflows for modern businesses.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-amber-200">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-amber-200">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-amber-200">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-amber-800 mt-8 pt-8 text-center text-amber-300">
            <p>&copy; 2024 LegalFlow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
