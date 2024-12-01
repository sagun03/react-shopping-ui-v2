import { useEffect, useState } from "react";
import { useUserContext } from "../context/UserContext";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useGetLog } from "../hooks/useTransaction";

const Transaction = () => {
  const { user } = useUserContext();
  const { data } = useGetLog(user.uid);
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    if (data) {
      setLogs(data.data);
    }
  }, [data]);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Product Id</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Points</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Comments</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            logs.map((log, _) => {
              return (
                <TableRow key={log.transactionId}>
                  <TableCell>
                    {log.transactionId}
                  </TableCell>
                  <TableCell>
                    { log.productId ? log.productId : "-" }
                  </TableCell>
                  <TableCell>
                    { log.date }
                  </TableCell>
                  <TableCell>
                    { log.amount }
                  </TableCell>
                  <TableCell>
                    { log.points }
                  </TableCell>
                  <TableCell>
                    { log.type }
                  </TableCell>
                  <TableCell>
                  { log.comments ? log.comments : "-" }
                  </TableCell>
                </TableRow>
              )
            })
          }
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Transaction;
