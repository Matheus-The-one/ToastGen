import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const invoices = [
  { invoice: "001" },
  { invoice: "002" },
  { invoice: "003" },
  { invoice: "004" },
  { invoice: "005" },
  { invoice: "INV006" },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
]

export function TableDemo() {
  return (
    <Table className="bg-purple-900 text-white">
      <TableCaption className="text-purple-200">A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow className="border-b border-purple-700">
          <TableHead className="w-[100px] text-white">თანმიმდევრობა</TableHead>
          <TableHead className="text-white">სტატუსი</TableHead>
          <TableHead className="text-white">მეთოდი</TableHead>
          <TableHead className="text-right text-white">სადღეგრძელო</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice} className="border-b border-purple-700">
            <TableCell className="font-medium bg-purple-800">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus || "-"}</TableCell>
            <TableCell>{invoice.paymentMethod || "-"}</TableCell>
            <TableCell className="text-right">{invoice.totalAmount || "-"}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}