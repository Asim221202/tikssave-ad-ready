import Layout from "@/components/Layout";
import { FileText } from "lucide-react";

const Terms = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <FileText className="w-6 h-6 text-primary-foreground" />
          </div>
          <h1 className="text-4xl font-bold">Terms of Service</h1>
        </div>
        
        <div className="prose prose-slate max-w-none">
          <p className="text-muted-foreground text-lg mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Agreement to Terms</h2>
            <p className="text-muted-foreground mb-4">
              By accessing and using TikSave, you agree to be bound by these Terms of Service and all 
              applicable laws and regulations. If you do not agree with any of these terms, you are 
              prohibited from using this website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Use License</h2>
            <p className="text-muted-foreground mb-4">
              Permission is granted to temporarily download one copy of materials from TikSave for 
              personal, non-commercial transitory viewing only. This is the grant of a license, 
              not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose</li>
              <li>Attempt to reverse engineer any software on TikSave</li>
              <li>Remove any copyright or proprietary notations</li>
              <li>Transfer the materials to another person or "mirror" the materials on another server</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Service Description</h2>
            <p className="text-muted-foreground mb-4">
              TikSave provides a service to download TikTok videos. We act as an intermediary between 
              you and TikTok's public API. We do not host, store, or distribute the downloaded content.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">User Responsibilities</h2>
            <p className="text-muted-foreground mb-4">
              As a user of TikSave, you agree to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li>Only download videos that you have the right to access</li>
              <li>Respect copyright and intellectual property rights of content creators</li>
              <li>Not use downloaded content for commercial purposes without proper authorization</li>
              <li>Comply with TikTok's Terms of Service</li>
              <li>Not attempt to abuse, overload, or disrupt our service</li>
              <li>Not use automated tools to access our service excessively</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Copyright and Intellectual Property</h2>
            <p className="text-muted-foreground mb-4">
              All videos downloaded through TikSave remain the property of their respective owners. 
              TikSave does not claim any ownership rights over the content. Users are solely responsible 
              for ensuring they have the necessary rights to download and use any content.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Disclaimer</h2>
            <p className="text-muted-foreground mb-4">
              The materials on TikSave are provided on an 'as is' basis. TikSave makes no warranties, 
              expressed or implied, and hereby disclaims and negates all other warranties including, 
              without limitation, implied warranties or conditions of merchantability, fitness for a 
              particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Limitations</h2>
            <p className="text-muted-foreground mb-4">
              In no event shall TikSave or its suppliers be liable for any damages (including, without 
              limitation, damages for loss of data or profit, or due to business interruption) arising 
              out of the use or inability to use TikSave.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Service Availability</h2>
            <p className="text-muted-foreground mb-4">
              We strive to provide uninterrupted service, but we do not guarantee that our service will 
              always be available, error-free, or secure. We reserve the right to modify, suspend, or 
              discontinue the service at any time without notice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Links to Third-Party Sites</h2>
            <p className="text-muted-foreground mb-4">
              TikSave may contain links to third-party websites. We are not responsible for the content, 
              privacy policies, or practices of these sites.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Modifications to Terms</h2>
            <p className="text-muted-foreground mb-4">
              TikSave may revise these terms of service at any time without notice. By using this 
              website, you agree to be bound by the current version of these Terms of Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
            <p className="text-muted-foreground mb-4">
              These terms and conditions are governed by and construed in accordance with applicable 
              laws, and you irrevocably submit to the exclusive jurisdiction of the courts.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p className="text-muted-foreground mb-4">
              If you have any questions about these Terms of Service, please contact us through our 
              Contact page.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Terms;
