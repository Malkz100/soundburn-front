import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import Link from 'next/link'

// customers will be populated at build time by getStaticProps()
function CustomerDetails({ customers }) {
    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Customer Details
                </h2>
            }>
            <Head>
                <title>Customer Details</title>
            </Head>
            <div className="py-6">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            Customer List
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="p-6 bg-white border-b border-gray-200">
                        <h1>
                            {customers.map((customer) => (
                                <li>{customer.username}</li>
                            ))}
                        </h1>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
//         export async function getStaticPaths() {
//             // Call an external API endpoint to get posts.
//             // You can use any data fetching library
//             const res = await fetch('http://localhost:8000/api/customers')
//             const customers = await res.json()
//
//             // Get the paths we want to pre-render based on posts
//             const props = customers.map((customer) => ({
//                 params: { id: customer.id },
//             }))
//
//             // We'll pre-render only these paths at build time.
//             // { fallback: blocking } will server-render pages
//             // on-demand if the path doesn't exist.
//             return { customer.id}
//         }
export async function getStaticPaths() {
    return {
        paths: [
            { params: { id: customer.id } } // See the "paths" section below
        ],
        fallback: "blocking" // See the "fallback" section below
    };
}
export default CustomerDetails
