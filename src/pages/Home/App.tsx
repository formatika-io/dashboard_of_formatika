import { Link } from "react-router-dom";
import waving from '../../assets/images/waving.png'

function App() {
  return (
    <div className="flex justify-center w-full h-screen items-center">
      <div className="w-1/2 flex justify-center items-center">
        <div>
          <p className="text-white text-2xl font-semibold tracking-wider leading-9">
            Salam <img src={waving} className="inline w-8" alt="" /> əziz
            developer
          </p>

          <div className="mt-3 ">
            <p className="text-[#c0bbbb] text-lg mb-8">
              formatika.io - da könüllü əməkdaş olmaq istəyən <br />
              hər kəs qeydiyyat formunu tamamlamalıdır. <br /> Bunun üçün
              `növbəti` düyməsinə klik etməli sonra <br /> isə özün haqqında
              məlumatlar tamamlamalısan.
            </p>

            <Link
              to="/signup"
              className="px-4 text py-2 border border-white rounded text-white"
            >
              Növbəti
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
