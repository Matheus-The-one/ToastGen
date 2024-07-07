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
  { invoice: "001",paymentMethod: "უფლის ხსენება", },
  { invoice: "002",paymentMethod: "მშვიდობის სადღეგრძელო", },
  { invoice: "003",paymentMethod: "თავყრილობის მიზეზის სადღეგრძელო", },
  { invoice: "004",paymentMethod: "ქვეყნის, სამშობლოს სადღეგრძელო", },
  { invoice: "005",paymentMethod: " გარდაცვლილთა ხსნოვნა (როგორც წესი, ცალკე ითქმის ტერიტორიული მთლიანობისთვის დაღუპულების სახსენებლი)", },
  { invoice: "006",paymentMethod: "მომავალის,  ბავშვების სადღეგრძელო", },
  {
    invoice: "007",paymentMethod: "მშობლების სადღეგრძელო",
  },
  { invoice: "008",paymentMethod: "დიასახლისების, ქალების სადღეგრძელო", },
  { invoice: "009",paymentMethod: "დედმამიშვილების სადღეგრძელო", },
  { invoice: "010",paymentMethod: "დიდი სანათესაოს სადღეგრძელო", },
  { invoice: "011",paymentMethod: "მეგობრების სადღეგრძელო", },
  { invoice: "012",paymentMethod: "სიყვარულის სადღეგრძელო", },
  { invoice: "013",paymentMethod: "წინაპრების სადღეგრძელო", },
  { invoice: "014",paymentMethod: "ეკლესიის, ქრისტიანობის, რწმენის, რჯულის სადღეგრძელო", },
  { invoice: "015",paymentMethod: "ქართული ტრადიციების, ადათების სადღეგრძელო", },
  { invoice: "016",paymentMethod: "ლამაზი მოგონებების სადღეგრძელო", },
  { invoice: "017",paymentMethod: "დაშლა-არმოშლის, საკართანო სადღეგრძელო", },
  { invoice: "018",paymentMethod: "ყოვლად წმინდის სადღეგრძელო", },
]

export function TableDemo() {
  return (
    <div className="bg-purple-900 bg-opacity-50 backdrop-blur-lg rounded-xl shadow-2xl overflow-hidden">
      <Table className="w-full">
        <TableCaption className="text-purple-200 font-semibold text-lg mb-4">
          სადღეგრძელოების ჩამონათვალი რომელიც შეიძელბა გამოგადგეთ
        </TableCaption>
        <TableHeader>
          <TableRow className="bg-purple-800 text-purple-100">
            <TableHead className="w-[100px] py-4 px-6 text-left font-bold">თანმიმდევრობა</TableHead>
            <TableHead className="py-4 px-6 text-left font-bold">სადღეგრძელო</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice} className="border-b border-purple-700 hover:bg-purple-800 transition-colors">
              <TableCell className="font-medium bg-black text-white py-4 px-6">{invoice.invoice}</TableCell>
              <TableCell className="py-4 px-6 text-purple-100">{invoice.paymentMethod || "-"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
