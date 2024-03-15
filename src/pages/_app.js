import '@/styles/globals.css'



export default function App({ Component, pageProps }) {


  return (
    <div>
      {/* You can include a Suspense wrapper here if needed for your components */}
      <Component {...pageProps} />
      {/* Alternatively, you could place Loader here based on your loading state logic */}
    </div>
  );
}
