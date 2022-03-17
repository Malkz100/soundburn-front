import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import Link from 'next/link'

// customers will be populated at build time by getStaticProps()
function ArtistList({ artists }) {
    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Artist Dashboard
                </h2>
            }>
            <Head>
                <title>Artist List</title>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.2/css/bootstrap.min.css"
                    integrity="sha512-MoRNloxbStBcD8z3M/2BmnT+rg4IsMxPkXaGh2zD6LGNNFE80W3onsAhRcMAMrSoyWL9xD7Ert0men7vR8LUZg=="
                    crossOrigin="anonymous"
                />
            </Head>
            <div className="py-6">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            Artist List
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <main
                        role="main"
                        className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                        <div className="card mt-5">
                            <div className="card-header">
                                <div className="float-left">
                                    <h3>Artist Admin Panel</h3>
                                </div>
                            </div>

                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-12 mt-1 mr-1">
                                        <div className="float-right">
                                            <a
                                                className="btn btn-success"
                                                href="{{ route('artist.create') }}">
                                                {' '}
                                                Add Artist
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-lg-12">
                                        <table className="table table-bordered">
                                            <tr>
                                                <th>Artist ID</th>
                                                <th>Name</th>
                                                <th>Bio</th>
                                                <th>Website</th>
                                                {/*<th>Post Code</th>*/}
                                                <th width="280px">Action</th>
                                            </tr>
                                            {artists.map(artist => (
                                                // eslint-disable-next-line react/jsx-key
                                                <tr>
                                                    <td>{artist.id}</td>
                                                    <td>{artist.name}</td>
                                                    <td>
                                                        {artist.bio}
                                                    </td>
                                                    <td>{artist.website}</td>
                                                    {/*<td>{artist.postcode}</td>*/}
                                                    <td>
                                                        <Link
                                                            href="/artistdetails"
                                                            as={`/artistdetails/${artist.id}`}>
                                                            <a
                                                                className="btn btn-info"
                                                                href="{{ route('artist.show',$artist->id) }}">
                                                                Show
                                                            </a>
                                                        </Link>
                                                        <Link
                                                            href="/artistdetails"
                                                            as={`/artistdetails/${artist.id}`}>
                                                            <a
                                                                className="btn btn-primary"
                                                                href="{{ route('artist.edit',$artist->id) }}">
                                                                Edit
                                                            </a>
                                                        </Link>

                                                        {/*@csrf*/}
                                                        {/*@method('DELETE')*/}

                                                        <Link
                                                            href="/artistdetails"
                                                            as={`/artistdetails/${artist.id}`}>
                                                            <a
                                                            //type="submit"
                                                                className="btn btn-danger">
                                                                Delete
                                                            </a>
                                                        </Link>
                                                    </td>
                                                </tr>
                                            ))}
                                        </table>
                                        {/*{!! $artists->links() !!}*/}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </AppLayout>
    )
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
    // Call an external API endpoint to get customers.
    // You can use any data fetching library
    const res = await fetch('http://localhost:8000/api/artists')
    const artists = await res.json()

    // By returning { props: { customers } }, the CustomerList component
    // will receive `customers` as a prop at build time
    return {
        props: {
            artists,
        },
    }
}

export default ArtistList
