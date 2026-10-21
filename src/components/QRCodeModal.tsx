import React, { useEffect, useState, useRef } from 'react';
import QRCode from 'qrcode';
import { QrCode, Download, Printer, X} from 'lucide-react';
import { useLanguage } from '../context/Languagecontext';

interface QRCodeModalProps{
    isOpen: boolean;
    onClose: () => void;
}

export const QRCodemodal: React.FC<QRCodeModalProps> =({ isOpen, onClose}) =>{
    const { t} = useLanguage();
    const [qrUrl, setQrUrl]= useState<string>('');
    const printRef = useRef<HTMLDivElement>(null);
    const productionUrl ='https://ankit-dev-7.github.io/Restaurant/#menu';

    useEffect(()=>{
        if (isOpen){
            QRCode.toDataURL(productionUrl,{
                width:300,
                margin:2,
                color:{
                    dark:'#000000',
                    light:'#ffffff',
                },
            })
            .then((url)=> setQrUrl(url))
            .catch((err)=> console.error ('Failed to generate QR code',err));
        }
    }, [isOpen]);
    if(!isOpen) return null;

    const handleDownload=() => {
        if (!qrUrl) return;
        const link = document.createElement('a');
        link.href= qrUrl;
        link.download ='Tandoori-Restaurent-Menu-QR.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    const handlePrint =() => {
        const printWindow= window.open ('', '_blank');
        if(!printWindow) return;

        printWindow.document.write(`
            <!DOCTYPE html>
            <html>
                <head>
                    <title>Tandoori Restaurant-QR Menu Card</title>
                    <style>
                        body{
                            font-family: Arial, sans-serif;
                            display:flex;
                            flex-direction: column;
                            align-items:center;
                            justify-content: center;
                            height: 100vh;
                            margin:0;
                            color:#000;
                            text-align: center;
                        }
                        .card{
                            border:2px solid #333;
                            padding: 30px;
                            border-radius: 12px;
                            max-width: 350px;
                        }
                        h1 { margin-bottom: 5px; font-size: 24px; color:#111;}
                        p{ margin-top: 5px; color: #555; font-size: 14px;}
                        img { width:220px; height: 220px; margin: 15px 0;}
                    </style>
                </head>
                <body>
                    <div class="card">
                        <h1>Tandoori Restaurant</h1>
                        <p>${t.qrModal.title}</p>
                        <img src="${qrUrl}" alt="QR Code" />
                        <p>${t.qrModal.instruction}</p>
                    </div>
                    <script>
                        window.onload = function() { window.print(); window.close(); };
                    </script>
                </body>
            </html>
            `);
            printWindow.document.close();
    };
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
      <div className="relative w-full max-w-md rounded-xl bg-[#1a1a1a] p-6 text-white shadow-2xl border border-orange-500/20">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-lg p-1 text-gray-400 hover:bg-white/10 hover:text-white">
            <X className="h-5 w-5" />
          </button>

          <div className="text-center" ref={printRef}>
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-orange-500/10 text-orange-500">
            <QrCode className="h-6 w-6" />
            </div>
            <h3 className="text-xl font=bold text-white">{t.qrModal.title}</h3>
            <p className="mt-1 text-sm text-gray-400">{t.qrModal.instruction}</p>

            <div className="my-5 flex justify-center">
                {qrUrl ?(
                    <div className="rounded-xl bg-white p-3 shadow-inner">
                        <img src={qrUrl} alt ="Menu QR Code" className="h-48 w-48"/>
                        </div>
                ):(
                    <div className="flex h-48 w-48 items-centerjustify-center rounded-xl bg-gray-800 text-gray-400">
                        Loading QR...
                        </div>
                )}    
                </div>
            </div>

            <div className="mt-6 flex flex-col gap-2 sm:flex-row">
                <button
                onClick={handleDownload}
                className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-gray-700 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10">
                    <Printer className="h-4 w-4" />
                    {t.qrModal.printCard}
                </button>
                </div>
                </div>
                </div>
    );
    };