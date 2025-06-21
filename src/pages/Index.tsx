
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileText, Users, CheckCircle, Clock, Shield, TrendingUp, Building2, ArrowRight, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-warm">
      {/* Header */}
      <header className="bg-warm-card border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              <span className="text-lg font-medium text-gray-900">VisaFlow</span>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
                Pricing
              </Button>
              <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
                About
              </Button>
              <Button onClick={() => navigate('/dashboard')} className="bg-gray-900 hover:bg-gray-800 text-white">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <Badge className="mb-6 bg-sage text-gray-800 px-4 py-2">
            Trusted by 500+ Companies
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Streamline Your Company's <span className="text-gray-700">Visa Operations</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            The comprehensive visa processing platform that eliminates complexity, reduces errors, 
            and accelerates approvals. From H-1B transfers to green card applications, 
            manage your entire immigration portfolio with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => navigate('/dashboard')} className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 text-lg">
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-4 text-lg border-gray-300 text-gray-700 hover:bg-gray-50">
              Schedule Demo
            </Button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-20">
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">98%</div>
            <div className="text-gray-600">Approval Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">45 Days</div>
            <div className="text-gray-600">Avg. Processing Time</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">$2.4M</div>
            <div className="text-gray-600">Legal Costs Saved</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
            <div className="text-gray-600">Enterprise Clients</div>
          </div>
        </div>
      </div>

      {/* Problem Statement */}
      <div className="bg-warm-card py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              The Hidden Cost of Immigration Complexity
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every year, companies lose millions in productivity, legal fees, and talent retention 
              due to inefficient visa processes. The average H-1B application takes 6 months and costs $15,000 per case.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white hover:shadow-lg transition-shadow border-gray-200">
              <CardHeader className="text-center pb-4">
                <Clock className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <CardTitle className="text-gray-900">Time Bottlenecks</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600">
                  Manual processes, document collection, and form preparation consume 40+ hours per case, 
                  delaying critical hires and impacting business growth.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow border-gray-200">
              <CardHeader className="text-center pb-4">
                <TrendingUp className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <CardTitle className="text-gray-900">Escalating Costs</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600">
                  Legal fees, filing costs, and internal resources add up quickly. 
                  Companies spend $50,000+ annually on immigration-related expenses per 10 employees.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow border-gray-200">
              <CardHeader className="text-center pb-4">
                <Shield className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                <CardTitle className="text-gray-900">Compliance Risks</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600">
                  Immigration errors can result in application denials, audit triggers, 
                  and regulatory penalties that jeopardize your company's reputation.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              End-to-End Visa Management
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial assessment to final approval, VisaFlow automates and orchestrates 
              every step of your immigration workflow with precision and compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-sage hover:shadow-lg transition-shadow border-gray-200">
              <CardHeader className="text-center pb-4">
                <FileText className="w-12 h-12 text-gray-700 mx-auto mb-4" />
                <CardTitle className="text-gray-900">Smart Workflows</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-700">
                  Automated workflow creation tailored to visa type, priority, and regulatory requirements.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-soft-orange hover:shadow-lg transition-shadow border-gray-200">
              <CardHeader className="text-center pb-4">
                <Users className="w-12 h-12 text-gray-700 mx-auto mb-4" />
                <CardTitle className="text-gray-900">Data Collection</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-700">
                  Intelligent forms that gather employee and company information with validation and error checking.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-muted-blue hover:shadow-lg transition-shadow border-gray-200">
              <CardHeader className="text-center pb-4">
                <CheckCircle className="w-12 h-12 text-gray-700 mx-auto mb-4" />
                <CardTitle className="text-gray-900">Document Engine</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-700">
                  Auto-generate petitions, supporting letters, and government forms with built-in compliance checks.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-warm-purple hover:shadow-lg transition-shadow border-gray-200">
              <CardHeader className="text-center pb-4">
                <Building2 className="w-12 h-12 text-gray-700 mx-auto mb-4" />
                <CardTitle className="text-gray-900">Filing Management</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-700">
                  Track submissions, monitor case status, and manage deadlines across all government agencies.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="bg-warm-card py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Transparent, Value-Driven Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Choose the plan that scales with your immigration needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Starter Plan */}
            <Card className="bg-white border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2">Starter</CardTitle>
                <div className="text-4xl font-bold text-gray-900 mb-2">$299</div>
                <CardDescription className="text-gray-600">per case</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Up to 10 cases/month</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Basic workflow automation</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Document generation</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Email support</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-gray-900 hover:bg-gray-800 text-white">
                  Start Free Trial
                </Button>
              </CardContent>
            </Card>

            {/* Professional Plan */}
            <Card className="bg-white border-2 border-gray-900 hover:shadow-lg transition-shadow relative">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-4 py-1">
                Most Popular
              </Badge>
              <CardHeader className="text-center pb-6 pt-8">
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2">Professional</CardTitle>
                <div className="text-4xl font-bold text-gray-900 mb-2">$199</div>
                <CardDescription className="text-gray-600">per case</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Up to 50 cases/month</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Advanced workflow automation</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Premium document templates</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Priority support</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Analytics dashboard</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-gray-900 hover:bg-gray-800 text-white">
                  Start Free Trial
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="bg-white border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2">Enterprise</CardTitle>
                <div className="text-4xl font-bold text-gray-900 mb-2">Custom</div>
                <CardDescription className="text-gray-600">pricing</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Unlimited cases</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Custom integrations</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Dedicated account manager</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">24/7 phone support</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">SLA guarantees</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full mt-6 border-gray-300 text-gray-700 hover:bg-gray-50">
                  Contact Sales
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Immigration Operations?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join hundreds of companies that have streamlined their visa processes with VisaFlow. 
            Start your free trial today and see results in your first case.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => navigate('/dashboard')} className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 text-lg">
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-4 text-lg border-gray-300 text-gray-700 hover:bg-gray-50">
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-warm-card border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              <span className="text-lg font-medium text-gray-900">VisaFlow</span>
            </div>
            <div className="flex space-x-8 text-gray-600">
              <a href="#" className="hover:text-gray-900 transition-colors">Privacy</a>
              <a href="#" className="hover:text-gray-900 transition-colors">Terms</a>
              <a href="#" className="hover:text-gray-900 transition-colors">Support</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-600">
            <p>&copy; 2024 VisaFlow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
