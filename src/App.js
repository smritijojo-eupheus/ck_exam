import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import OnlineExam from "./pages/R&E/OnlineExam";
import StartExam from "./pages/R&E/StartExam";
import ExamPage from "./pages/R&E/ExamPage";
import PageNotFound from "./pages/R&E/PageNotFound";
import PersonalRevisionSheet from "./pages/R&E/PersonalRevisionSheet";

function App() {
  const client = new QueryClient();
  return (
    <div className="font-Roboto">
      <QueryClientProvider client={client}>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Login />} />
            <Route
              path="/revision_and_exam/online_exam"
              element={<OnlineExam />}
            />
            <Route path="*" element={<PageNotFound/>} />
            <Route path="/revision_and_exam/start_exam" element={<StartExam/>} />
            <Route path="/revision_and_exam/exam_page" element={<ExamPage />} />
            <Route path="/revision_and_exam/revision_page" element={<PersonalRevisionSheet />} />
            
            
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
