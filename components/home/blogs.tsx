import Link from "next/link";

export default function Blogs(){
    return(
        <>
        <h2 className="text-xl font-semibold">Blogs</h2>
          <div className="space-y-8">

            <div className="grid gap-1">
              <Link href="https://rohithrajasekharan.hashnode.dev/type-safety-across-the-stack-from-typescript-to-go" target="blank">
              <h3 className="font-semibold underline cursor-pointer">Type Safety Across the Stack: From TypeScript to Go</h3>
                </Link>
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500">Published on Jul 22, 2024</p>
              </div>
              <p className="text-sm">
              This article shares personal experiences and insights on the benefits of type safety in software development, focusing on the transition from TypeScript to Go. Discover how strong typing can enhance code reliability, productivity, and overall developer satisfaction.
              </p>
            </div>

            {/* <div className="grid gap-1">
              <h3 className="font-semibold underline cursor-pointer">Mastering TypeScript: A Beginner Guide</h3>
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500">Published on March 20, 2023</p>
              </div>
              <p className="text-sm">
                This blog post provides a comprehensive introduction to TypeScript, covering its key features, benefits,
                and practical examples for building robust, type-safe web applications.
              </p>
            </div> */}

          </div>
          </>
    )
}