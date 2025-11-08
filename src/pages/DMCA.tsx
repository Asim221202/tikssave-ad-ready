import Layout from "@/components/Layout";
import { AlertTriangle } from "lucide-react";

const DMCA = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <AlertTriangle className="w-6 h-6 text-primary-foreground" />
          </div>
          <h1 className="text-4xl font-bold">DMCA Policy</h1>
        </div>
        
        <div className="prose prose-slate max-w-none">
          <p className="text-muted-foreground text-lg mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Digital Millennium Copyright Act Notice</h2>
            <p className="text-muted-foreground mb-4">
              TikSave respects the intellectual property rights of others and expects its users to do 
              the same. In accordance with the Digital Millennium Copyright Act of 1998 (DMCA), we will 
              respond expeditiously to claims of copyright infringement committed using our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Our Role</h2>
            <p className="text-muted-foreground mb-4">
              TikSave is a tool that allows users to download publicly available TikTok videos. We do not:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li>Host or store any video content on our servers</li>
              <li>Upload any content to TikTok or any other platform</li>
              <li>Modify or alter any video content</li>
              <li>Redistribute or share downloaded content</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              We act solely as an intermediary, providing a technical service to access publicly 
              available content from TikTok.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Copyright Infringement Claims</h2>
            <p className="text-muted-foreground mb-4">
              If you believe that your copyrighted work has been copied in a way that constitutes 
              copyright infringement and is accessible via TikSave, please notify us. Your notice 
              must include the following information:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li>A physical or electronic signature of the copyright owner or authorized representative</li>
              <li>Identification of the copyrighted work claimed to have been infringed</li>
              <li>Identification of the material that is claimed to be infringing, including the URL</li>
              <li>Your contact information (address, telephone number, email address)</li>
              <li>A statement that you have a good faith belief that use of the material is not authorized</li>
              <li>A statement that the information in the notification is accurate, and under penalty of perjury, 
                  that you are authorized to act on behalf of the copyright owner</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">How to Submit a DMCA Notice</h2>
            <p className="text-muted-foreground mb-4">
              Please send your DMCA notice to us via our Contact page. Include "DMCA Notice" in the subject line.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Counter-Notice</h2>
            <p className="text-muted-foreground mb-4">
              If you believe that your content was removed or disabled by mistake or misidentification, 
              you may file a counter-notice. Your counter-notice must include:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li>Your physical or electronic signature</li>
              <li>Identification of the material that has been removed or disabled</li>
              <li>A statement under penalty of perjury that you have a good faith belief that the material 
                  was removed or disabled as a result of mistake or misidentification</li>
              <li>Your name, address, and telephone number</li>
              <li>A statement that you consent to the jurisdiction of the Federal District Court</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Repeat Infringers</h2>
            <p className="text-muted-foreground mb-4">
              In accordance with the DMCA and other applicable law, we have adopted a policy of 
              terminating, in appropriate circumstances, access to our service for users who are 
              deemed to be repeat infringers.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">User Responsibility</h2>
            <p className="text-muted-foreground mb-4">
              Users of TikSave are solely responsible for:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li>Ensuring they have the right to download any content</li>
              <li>Respecting copyright and intellectual property rights</li>
              <li>Using downloaded content in compliance with applicable laws</li>
              <li>Obtaining necessary permissions before downloading protected content</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Disclaimer</h2>
            <p className="text-muted-foreground mb-4">
              We are not liable for any misuse of our service by users. Users who download content 
              do so at their own risk and are responsible for ensuring they comply with all applicable 
              laws and respect intellectual property rights.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Questions</h2>
            <p className="text-muted-foreground mb-4">
              If you have any questions about this DMCA Policy, please contact us through our Contact page.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default DMCA;
