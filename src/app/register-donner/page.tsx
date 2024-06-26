import React from "react";
import Image from "next/image";
import DonorRegister from "@/components/shared/Auth/DonorRegister";

const RegisterPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl w-full space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-600">
            Register Now
          </h2>
        </div>
        <div className="pb-4 px-6 shadow rounded-lg sm:px-10 bg-white">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="w-full md:w-3/5">
              <DonorRegister />
            </div>
            <div className="hidden md:block ">
              <Image
                src="https://img.freepik.com/vecteurs-libre/illustration-concept-abstrait-assurance-chomage-prestations-chomage-emploi-perdu-homme-affaires-stresse-fatigue-formulaire-reclamation-indemnisation-accidents-du-travail-paperasse-entretien_335657-192.jpg?w=826&t=st=1717663785~exp=1717664385~hmac=9ec73807457d87eb68dc469e21b17971ea22f66d6939c04c0ecfb62c45b20c00"
                width={400}
                height={400}
                alt="Login Illustration"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
