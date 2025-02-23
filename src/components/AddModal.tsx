import React from 'react'
import Add from './SVG/TabBar/Add'
import { Dialog } from "radix-ui";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
const AddModal = () => {
  return (
    <Dialog.Root>
		<Dialog.Trigger asChild>
			<button className="inline-flex h-[35px] items-center justify-center rounded  px-[15px] font-medium leading-none text-violet11 outline-none outline-offset-1 focus-visible:outline-2  select-none">
				<Add/>
			</button>
		</Dialog.Trigger>
		<Dialog.Portal>
			<Dialog.Overlay className="fixed inset-0 bg-blackA6 data-[state=open]:animate-overlayShow" />
			<Dialog.Content className="fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-gray1 p-[25px] shadow-[var(--shadow-6)] focus:outline-none data-[state=open]:animate-contentShow">
				<Dialog.Title className="m-0 text-[17px] font-medium text-mauve12 text-center">
					What would you like to add?
				</Dialog.Title>
				<Dialog.Description className="text-center mb-5 mt-2.5 text-[15px] leading-normal text-mauve11">
				Would you like to post your tips and experiences or create a job?
				</Dialog.Description>
				<Link to="/post">
            <Button className='bg-[#130160] w-full mb-2'>POST</Button>
          </Link>
          <Link to="/create-job">
            <Button className='bg-[#D6CDFE] w-full text-black'>MAKE A JOB</Button>
          </Link>
			
				
				
				<Dialog.Close asChild>
					<button
						className="absolute right-2.5 top-2.5 inline-flex size-[25px] appearance-none items-center justify-center rounded-full text-violet11 bg-gray3 hover:bg-violet4 focus:shadow-[0_0_0_2px] focus:shadow-violet7 focus:outline-none"
						aria-label="Close"
					>
						<Cross2Icon />
					</button>
				</Dialog.Close>
			</Dialog.Content>
		</Dialog.Portal>
	</Dialog.Root>
  )
}

export default AddModal
