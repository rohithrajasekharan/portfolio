export default function Blogs(){
    return(
        <>
        <h2 className="text-xl font-semibold">Blogs</h2>
          <div className="space-y-8">
            <div className="grid gap-1">
              <h3 className="font-semibold underline cursor-pointer">Scaling Rust Microservices with Kubernetes</h3>
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500">Published on May 15, 2023</p>
              </div>
              <p className="text-sm">
                In this blog post, I share my experience in building and deploying a Rust-based microservices
                architecture on Kubernetes, focusing on strategies for scalability, reliability, and performance
                optimization.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="font-semibold underline cursor-pointer">Mastering TypeScript: A Beginner's Guide</h3>
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500">Published on March 20, 2023</p>
              </div>
              <p className="text-sm">
                This blog post provides a comprehensive introduction to TypeScript, covering its key features, benefits,
                and practical examples for building robust, type-safe web applications.
              </p>
            </div>
          </div>
          </>
    )
}