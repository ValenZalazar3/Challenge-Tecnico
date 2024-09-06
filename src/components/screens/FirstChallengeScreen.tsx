"use client";

import { useHandleFirstChallenge } from "@/app/hooks/useHandleFirstChallenge";
import { ErrorComponent } from '../ErrorComponent'
import { ResultComponent } from "../ResultComponent";


export default function FirstChallengeScreen() {

    const { state,
        setNumbers,
        setNumber,
        setTargetSum,
        handleResetNumber,
        handleResetTargetSum,
        handleSubmit } = useHandleFirstChallenge()


    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col justify-center items-center h-screen">
                <h1 className="text-3xl my-10 text-black">Challenge 1ro</h1>


                <div className="mb-16">
                    <label
                        htmlFor="default-input"
                        className="block mb-2 text-md font-medium text-gray-900"
                    >
                        Colocar números distintos:
                    </label>
                    <input
                        autoComplete="off"
                        type="text"
                        value={state.number == undefined ? '' : state.number}
                        onChange={(e) => setNumber(e.target.value)}
                        id="default-input"
                        className="bg-gray-50 border mb-5 border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-[23rem] md:w-[30rem] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />

                    <ErrorComponent isInvalid={state.error} />

                    <button
                        onClick={(e) => {
                            e.preventDefault()
                            setNumbers(state.number ?? "");
                        }}
                        onFocus={() => { }}
                        disabled={!!state.error}
                        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-xl text-sm px-5 py-2.5 me-2 mb-2 mt-4 ml-3 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                    >
                        Agregar número
                    </button>
                    <button onClick={handleResetNumber} onFocus={() => { }} className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-xl text-sm px-5 py-2.5 me-2 ml-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                        Eliminar números
                    </button>
                    {
                        state.numbers ? (
                            <input
                                autoComplete="off" type="text" data-testid="disabled-input-2" aria-label="result input" className="bg-gray-100 border mt-4 border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-[23rem] md:w-[30rem] p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value={`Tus números son: ${state.numbers}`} disabled readOnly></input>
                        ) : undefined
                    }

                </div>

                <div>
                    <label
                        htmlFor="default-input"
                        className="block mb-2 text-md font-medium text-gray-900 ">
                        Suma objetivo:
                    </label>
                    <input
                        autoComplete="off"
                        type="number"
                        onChange={(e) => setTargetSum(Number(e.target.value))}
                        value={state.targetSum == 0 ? '' : state.targetSum}
                        id="default-input"
                        className="bg-gray-50 border mb-5 border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-[23rem] md:w-[30rem] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                    <button onClick={handleResetTargetSum} onFocus={() => { }} className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-xl text-sm px-5 py-2.5 me-2 mb-2 ml-4 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                        Eliminar número a encontrar
                    </button>
                </div>

                <button type="submit" onFocus={() => { }} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-xl text-sm px-5 py-2.5 me-2 mb-2 mt-10 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Encontrar par</button>
                <ResultComponent result={state.result} />
            </div>

        </form>
    );
}
