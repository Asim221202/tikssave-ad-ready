import Layout from "@/components/Layout";
import { FileText } from "lucide-react";

const Terms = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center shadow-[var(--shadow-glow)]">
            <FileText className="w-6 h-6 text-background" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Terms of Service
          </h1>
        </div>
        
        <div className="prose prose-slate max-w-none">
          <p className="text-muted-foreground text-lg mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8 bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Agreement to Terms</h2>
            <p className="text-muted-foreground mb-4">
              By accessing and using TiksSave, you agree to be bound by these Terms of Service and all
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

          <section className="mb-8 bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Service Description</h2>
            <p className="text-muted-foreground mb-4">
              TiksSave provides a service to download TikTok videos. We act as an intermediary between
              you and TikTok's public API. We do not host, store, or distribute the downloaded content.
            </p>
          </section>

          <section className="mb-8 bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">User Responsibilities</h2>
            <p className="text-muted-foreground mb-4">
              As a user of TiksSave, you agree to:
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

          <section className="mb-8 bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Copyright and Intellectual Property</h2>
            <p className="text-muted-foreground mb-4">
              All videos downloaded through TiksSave remain the property of their respective owners. 
              TiksSave does not claim any ownership rights over the content. Users are solely responsible
              for ensuring they have the necessary rights to download and use any content.
            </p>
          </section>

          <section className="mb-8 bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Disclaimer</h2>
            <p className="text-muted-foreground mb-4">
              The materials on TiksSave are provided on an 'as is' basis. TiksSave makes no warranties,
              expressed or implied, and hereby disclaims and negates all other warranties including, 
              without limitation, implied warranties or conditions of merchantability, fitness for a 
              particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section className="mb-8 bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Limitations</h2>
            <p className="text-muted-foreground mb-4">
              In no event shall TiksSave or its suppliers be liable for any damages (including, without
              limitation, damages for loss of data or profit, or due to business interruption) arising 
              out of the use or inability to use TikSave.
            </p>
          </section>

          <section className="mb-8 bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Service Availability</h2>
            <p className="text-muted-foreground mb-4">
              We strive to provide uninterrupted service, but we do not guarantee that our service will 
              always be available, error-free, or secure. We reserve the right to modify, suspend, or 
              discontinue the service at any time without notice.
            </p>
          </section>

          <section className="mb-8 bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Links to Third-Party Sites</h2>
            <p className="text-muted-foreground mb-4">
              TiksSave may contain links to third-party websites. We are not responsible for the content,
              privacy policies, or practices of these sites.
            </p>
          </section>

          <section className="mb-8 bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Modifications to Terms</h2>
            <p className="text-muted-foreground mb-4">
              TiksSave may revise these terms of service at any time without notice. By using this
              website, you agree to be bound by the current version of these Terms of Service.
            </p>
          </section>

          <section className="mb-8 bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Governing Law</h2>
            <p className="text-muted-foreground mb-4">
              These terms and conditions are governed by and construed in accordance with applicable 
              laws, and you irrevocably submit to the exclusive jurisdiction of the courts.
            </p>
          </section>

          <section className="mb-8 bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Contact Information</h2>
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
