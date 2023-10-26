import Head from "next/head";


import HomePage from "@/components/Home";




export default function Home() {
  const y = new Date();
  let year = y.getFullYear();



  const schema = {
    "@context": "http://www.schema.org",
    "@type": "WebSite",
    name: "Random Picker Wheel",
    alternateName: "Spin The Wheel",
    description:"random picker wheel is a free to use online tool. A spinning wheel for a random picker, you can custom enter selections, create a custom spin wheel that supports on the app/web.",
    "image": "https://randompickerwheel.com/images/logo.png",
    url: "https://randompickerwheel.com/",
    copyrightYear: year,

  };

  function createSchema(element) {
    return { __html: JSON.stringify(element) };
  }

  


  return (
    <>
      <Head>
        <title>Spin The Wheel for Random Choices</title>

      

                
        <meta name="title" content="Spin The Wheel for Random Choices" />

<meta
  name="description"
  content="random picker wheel is a free to use online tool. A spinning wheel for a random picker, you can custom enter selections, create a custom spin wheel that supports on the app/web "
/>

<meta
  name="keywords"
  content="spin the wheel, random wheel generator, picker wheel, custom spin wheel generator, Decision wheel, wheel decide,  "
/>
<script
          type="application/ld+json"
          dangerouslySetInnerHTML={createSchema(schema)}
        />
<link rel="canonical" href="https://randompickerwheel.com/" />
      </Head>
    <HomePage/>
    </>
  );
}
