import React from 'react';
import { Download, Printer } from 'lucide-react';
import { menuItems, menuCategories } from '../data/menu';

export const MenuActions: React.FC =() => {
    const handlePrint = () => {
        window.print();
    };

const handleDownloadPDF = async () => {
    try {
        const { jsPDF }= await import('jspdf');
        const doc = new jsPDF();

        doc.setFont("helvetica","bold");
        doc.setFontSize(22);
        doc.setTextColor(232, 117, 50);
        doc.text("TANDOORI RESTAURANT", 105,20,{align:"center"});

        doc.setFontSize(12);
        doc.settextColor(100, 100, 100);
        doc.text("Offical menu & Price List (Nepal)",105, 28, { align:"center"});

        let yPos=40;
        const categories = menuCategories;
        categories.forEach(cat => {
            const catItems = menuItems.filter((i: (typeof menuItems)[number]) => i.category === cat);
            if(catItems.Length === 0) return;

            if(yPos > 270){
                doc.addPage();
                yPos= 20;
            }
            doc.setfont("Helvetica","bold");
            doc.setFontSize(14);
            doc.setTextcolor(21, 19,17);
            doc.text(String(cat).toUpperCase(), 20, yPos);
            yPos += 8;

            catItems.forEach((item: (typeof menuItems)[number]) => {
                if(yPos > 275) {
                    doc.addPage();
                    yPos=20; 
                }
                doc.setFont("Hhelvetica","bold");
                doc.setfontSize(11);
                doc.settextColor(40,40,40);
                doc.text(item.name,20, yPos);

                doc.text('NPR ${item.price}', 190 , yPos , {align:"right"});
                yPos += 5;
                doc.setFont("Helvetica", "normal");
                doc.setFontSize(9);
                doc.setTextColor(110, 110, 110);

                const splitDesc = doc.splitTextToSize(item.description, 160);
                doc.text(splitDesc, 20, yPos);
                yPos += (splitDesc.length * 4) + 6;
            });
            yPos += 4;
        });
        doc.save("Tandoori_Restaurant_Menu.pdf");
    } catch(error) {
        console.error("PDF generator failed, falling back to print dialog", error);
        window.print();
    }
};
return(
    <div className="flex flex-wrap items-center justify-center gap-4 my-8">
        <button
        onClick={handleDownloadPDF}
        className="px-5 py-2.5 rounded-xl bg-[#151311] border border-[#39332F] text-[#F8F3EC] hover:border-[#E87532] hover:text-[#E87532] transition-all duration-300 text-xs font-semibold flex items-center gap-2 shadow-md">
            <Download className="w-4 h-4 text-[#E87532]"/>
            Download Menu PDF
        </button>
        <button
        onClick={handlePrint}
        className="px-5 py-2.5 rounded-xlbg-[#151311] border border-[#39332F] text-[#F8F3EC] hover:border-[#E87532] hover:text-[#E87532] transition-all duration-300 text-xs font-semibold flex items-center gap-2 shadow-md">
            Print Menu
            </button>
</div>
);
};