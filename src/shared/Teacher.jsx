import {
    Table,
    TableBody,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
    TableCell,
  } from "@/components/ui/table";
  
  const data = [
    {
      fullName: "Umida Umiullayeva",
      phoneNumber: "99 436 89 42",
      groups: "0 group",
      percent: "40%",
    },
    {
      fullName: "Shoraximov Shamsiddin",
      phoneNumber: "99 436 89 42",
      groups: "0 group",
      percent: "45%",
    },
    {
      fullName: "Botir Umarov",
      phoneNumber: "99 436 89 42",
      groups: "0 group",
      percent: "45%",
    },
    {
      fullName: "Sherali Sheraliyev",
      phoneNumber: "99 436 89 42",
      groups: "0 group",
      percent: "45%",
    },
    {
      fullName: "Vaxob Vaxobov",
      phoneNumber: "99 436 89 42",
      groups: "0 group",
      percent: "45%",
    },
    {
      fullName: "Nozima Safaullayeva",
      phoneNumber: "99 436 89 42",
      groups: "0 group",
      percent: "45%",
    },
  ];
  
  export function Teacher() {
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[150px] text-blue-500">Full Name</TableHead>
            <TableHead className="text-blue-500">Phone Number</TableHead>
            <TableHead className ='text-blue-500'>Groups</TableHead>
            <TableHead className="text-right text-blue-500">Percent</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium text-blue-500">{item.fullName}</TableCell>
              <TableCell className="text-blue-500">{item.phoneNumber}</TableCell>
              <TableCell className ='text-blue-500'>{item.groups}</TableCell>
              <TableCell className="text-right text-blue-500">{item.percent}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }
  