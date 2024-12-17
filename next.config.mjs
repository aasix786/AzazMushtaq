/** @type {import('next').NextConfig} */
let nextConfig = {
    output: 'export',
    distDir:"dist",
   
    images: {
      unoptimized: true,
    },
  reactStrictMode: true,
 
};
console.log("process.env.NODE_ENV")
console.log(process.env.NODE_ENV)
if(process.env.NODE_ENV != "development"){
    nextConfig.basePath = "/AzazMushtaq"
}
 
export default nextConfig;
