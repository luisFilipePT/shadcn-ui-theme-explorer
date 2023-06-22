import {
  // ArrowDownToLine,
  ArrowUpCircle,
  // ArrowUpToLine,
  CheckCircle2,
  Circle,
  HelpCircle,
  // ArrowRightToLine,
  XCircle,
} from "lucide-react"

export const labels = [
  {
    value: "bug",
    label: "Bug",
  },
  {
    value: "feature",
    label: "Feature",
  },
  {
    value: "documentation",
    label: "Documentation",
  },
]

export const statuses = [
  {
    value: "backlog",
    label: "Backlog",
    icon: HelpCircle,
  },
  {
    value: "todo",
    label: "Todo",
    icon: Circle,
  },
  {
    value: "in progress",
    label: "In Progress",
    icon: ArrowUpCircle,
  },
  {
    value: "done",
    label: "Done",
    icon: CheckCircle2,
  },
  {
    value: "canceled",
    label: "Canceled",
    icon: XCircle,
  },
]

export const priorities = [
  {
    label: "Low",
    value: "low",
    icon: ArrowUpCircle,
  },
  {
    label: "Medium",
    value: "medium",
    icon: ArrowUpCircle,
  },
  {
    label: "High",
    value: "high",
    icon: ArrowUpCircle,
  },
]
