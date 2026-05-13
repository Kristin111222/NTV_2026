import { Card, CardContent } from "../ui/card";

type Props = {
  total: number;
  completed: number;
  pending: number;
};

export default function DashboardStats({ total, completed, pending }: Props) {
  return (
    <Card>
      <CardContent>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-sm text-muted-foreground">Total</p>
            <p className="text-2xl font-bold">{total}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Completed</p>
            <p className="text-2xl font-bold">{completed}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Pending</p>
            <p className="text-2xl font-bold">{pending}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}