import { motion, AnimatePresence } from 'framer-motion'

interface YesNoProps {
  open: boolean
  setOpen: () => void
}

export default function QAModal(props: YesNoProps) {
  const { open, setOpen } = props
  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 flex items-end justify-center">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="w-full rounded-t-2xl bg-white p-10"
          >
            <div className="mx-auto mb-7 h-1 w-12 rounded-full bg-[#130160]"></div>

            <h4 className="text-center text-xl font-semibold">Log out</h4>
            <p className="mt-2 text-center text-gray-600">
              Are you sure you want to leave?
            </p>

            <div className="mt-7 flex flex-col space-y-3 font-medium leading-loose">
              <button
                className="w-full rounded-lg bg-[#130160] px-4 py-2 text-white transition"
                onClick={() => console.log('Logging out...')}
              >
                YES
              </button>
              <button
                className="w-full rounded-lg bg-[#bbb9c4] px-4 py-2 text-gray-50 transition"
                onClick={setOpen}
              >
                CANCEL
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
