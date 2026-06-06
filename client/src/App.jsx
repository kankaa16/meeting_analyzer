import { Routes, Route } from "react-router-dom";

import Login from "./pages/login";
import Register from "./pages/register";
import Dashboard from "./pages/dashboard";
import Meetings from "./pages/meetings";
import MeetingDetails from "./pages/meeting_details";
import Analysis from "./pages/analysis";
import ActionItems from "./pages/action_items";
import Overdue from "./pages/overdue";
import ProtectedRoute from "./components/protected_route";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>

<Route
  path="/meetings"
  element={
    <ProtectedRoute>
      <Meetings />
    </ProtectedRoute>
  }
/>

<Route
  path="/meetings/:id"
  element={
    <ProtectedRoute>
      <MeetingDetails />
    </ProtectedRoute>
  }
/>

<Route
  path="/analysis/:id"
  element={
    <ProtectedRoute>
      <Analysis />
    </ProtectedRoute>
  }
/>

<Route
  path="/action-items"
  element={
    <ProtectedRoute>
      <ActionItems />
    </ProtectedRoute>
  }
/>

<Route
  path="/overdue"
  element={
    <ProtectedRoute>
      <Overdue />
    </ProtectedRoute>
  }
/>
    </Routes>
  );
}

export default App;