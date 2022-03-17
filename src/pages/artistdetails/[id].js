import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import Link from 'next/link'

// artists will be populated at build time by getStaticProps()
function ArtistDetails({ details }) {
    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Artist Details
                </h2>
            }>
            <Head>
                <title>Artist Details</title>
            </Head>
            <div className="py-6">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <Link href="/artistlist">
                                <a>Back to Artist List</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="p-6 bg-white border-b border-gray-200">
                        <h1>ArtistNo: {details.id}</h1>
                        <h1>Artist Name: {details.name}</h1>
                        {/*<p>*/}
                        {/*    {details.title} {details.firstname}{' '}*/}
                        {/*    {details.lastname}*/}
                        {/*</p>*/}

                        <p>{details.address1}</p>
                        <p>{details.address2}</p>
                        <p>{details.towncity}</p>
                        <p>{details.county}</p>
                        <p>{details.postcode}</p>
                        <p>{details.phone}</p>
                        <p>{details.email}</p>
                        <p>
                                <a href={details.website}>{details.website}</a>
                        </p>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export async function getStaticPaths() {
    // Call an external API endpoint to get customers
    const res = await fetch('http://localhost:8000/api/artists')
    const artists = await res.json()

    // Get the paths we want to pre-render based on artists
    const paths = artists.map(artist => ({
        params: { id: artist.id.toString() },
    }))

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
    // params contains the customer `id`.
    // If the route is like /customers/1, then params.id is 1
    const res = await fetch(`http://localhost:8000/api/artists/${params.id}`)
    const details = await res.json()

    // Pass artist data to the page via props
    return { props: { details } }
}
export default ArtistDetails
