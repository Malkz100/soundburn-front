import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import Link from 'next/link'

// customers will be populated at build time by getStaticProps()
function CustomerList({ customers }) {
    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Customer Dashboard
                </h2>
            }>
            <Head>
                <title>Customer List</title>
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
                        <ul>
                            {customers.map((customer) => (
                                <li>
                                    <Link href="/customerdetails" as={`/customerdetails/${customer.id}`} >
                                        <a className="ml-4 text-sm text-gray-700 underline">
                                            {customer.title}{' '}
                                            {customer.firstname}{' '}
                                            {customer.lastname}{' '}
                                            {customer.id}
                                        </a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch('http://localhost:8000/api/customers')
    const customers = await res.json()

    // By returning { props: { customers } }, the CustomerList component
    // will receive `customers` as a prop at build time
    return {
        props: {
            customers,
        },
    }
}

export default CustomerList
