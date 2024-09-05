'use client'

import { useHandleSecondChallenge } from "@/app/hooks/useHandleSecondChallenge"
import { ErrorComponent } from "../ErrorComponent";
import { ResultComponentSC } from "../ResultComponentSC";




export const SecondChallengeScreen = () => {

    const { state,
        setCoins,
        setCoin,
        handleResetCoin,
        handleSubmit } = useHandleSecondChallenge();

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col justify-center items-center h-screen">
                <h1 className="text-3xl mb-10">Challenge 2do</h1>


                <div className="mb-16">
                    <label
                        htmlFor="default-input"
                        className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
                    >
                        Colocar monedas de cambio:
                    </label>
                    <input
                        type="text"
                        value={state.coin == undefined ? '' : state.coin}
                        onChange={(e) => setCoin(e.target.value)}

                        id="default-input"
                        className="bg-gray-50 border  mb-5 border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-[30rem] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />

                    <ErrorComponent isInvalid={state.error} />

                    <button
                        onClick={(e) => {
                            e.preventDefault()
                            setCoins(state.coin ?? "");
                        }}
                        onFocus={() => { }}
                        disabled={!!state.error}
                        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-xl text-sm px-5 py-2.5 me-2 mb-2 mt-4 ml-4 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                    >
                        Agregar cambio
                    </button>
                    <button onClick={handleResetCoin} onFocus={() => { }} className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-xl text-sm px-5 py-2.5 me-2 ml-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                        Eliminar cambio
                    </button>
                    {
                        state.coins ? (
                            <input type="text" id="disabled-input-2" aria-label="disabled input 2" className="bg-gray-100 border mt-4 border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-[30rem] p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value={`Tus números son: ${state.coins}`} disabled readOnly></input>
                        ) : undefined
                    }

                </div>



                <button type="submit" onFocus={() => { }} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-xl text-sm px-5 py-2.5 me-2 mb-2 mt-10 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                    Comprobar cambio mínimo</button>
                <ResultComponentSC changeMin={state.changeMin} />
            </div>

        </form>
    )
}
