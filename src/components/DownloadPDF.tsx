import { FC } from 'react'
import { PDFDownloadLink } from '@react-pdf/renderer'
import { Invoice } from '../data/types'
import { useDebounce } from '@uidotdev/usehooks'
import InvoicePage from './InvoicePage'

interface Props {
  data: Invoice
  setData(data: Invoice): void
}

  const Download: FC<Props> = ({data}) => {
  const debounced = useDebounce(data, 500)

  const title = data.invoiceTitle ? data.invoiceTitle.toLowerCase() : 'invoice'
  return (
    <div className={'download-pdf '}>
      <PDFDownloadLink
        key="pdf"
        document={<InvoicePage pdfMode={true} data={debounced} />}
        fileName={`${title}.pdf`}
        aria-label="Save PDF"
        title="Save PDF"
        className="download-pdf__pdf"
      ></PDFDownloadLink>
      <p>Save PDF</p>

 
    </div>
  )
}

export default Download
