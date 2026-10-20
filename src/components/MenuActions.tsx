import React from 'react';
import { Download, Printer } from 'lucide-react';
import { menuCategories } from '../data/menu';

export const MenuActions: React.FC = () => {
    const handlePrint = () => {
        window.print();
    };

    const handleDownloadPDF = async () => {
        try {
            const { jsPDF } = await import('jspdf');
            const doc = new jsPDF();

            doc.setFont('helvetica', 'bold');
            doc.setFontSize(22);
            doc.setTextColor(232, 117, 50);
            doc.text('TANDOORI RESTAURANT', 105, 20, { align: 'center' });

            doc.setFontSize(12);
            doc.setTextColor(100, 100, 100);
            doc.text('Official Menu & Price List (Nepal)', 105, 28, { align: 'center' });

            let yPos = 40;
            menuCategories.forEach((category) => {
                if (category.items.length === 0) return;

                if (yPos > 270) {
                    doc.addPage();
                    yPos = 20;
                }
                doc.setFont('helvetica', 'bold');
                doc.setFontSize(14);
                doc.setTextColor(21, 19, 17);
                doc.text(category.title.toUpperCase(), 20, yPos);
                yPos += 8;

                category.items.forEach((item) => {
                    if (yPos > 275) {
                        doc.addPage();
                        yPos = 20;
                    }
                    doc.setFont('helvetica', 'bold');
                    doc.setFontSize(11);
                    doc.setTextColor(40, 40, 40);
                    doc.text(item.name, 20, yPos);
                    doc.text(`NPR ${item.numericPrice.toFixed(2)}`, 190, yPos, { align: 'right' });

                    yPos += 5;
                    doc.setFont('helvetica', 'normal');
                    doc.setFontSize(9);
                    doc.setTextColor(110, 110, 110);
                    doc.text(item.isVeg ? 'Vegetarian' : 'Non-vegetarian', 20, yPos);
                    yPos += 8;
                });
                yPos += 4;
            });

            doc.save('Tandoori_Restaurant_Menu.pdf');
        } catch (error) {
            console.error('Failed to generate the menu PDF.', error);
            window.alert('The menu PDF could not be generated. Please try printing the menu instead.');
        }
    };

    return (
        <div className="flex flex-wrap items-center justify-center gap-4 my-8">
            <button
                type="button"
                onClick={handleDownloadPDF}
                className="px-5 py-2.5 rounded-xl bg-[#151311] border border-[#39332F] text-[#F8F3EC] hover:border-[#E87532] hover:text-[#E87532] transition-all duration-300 text-xs font-semibold flex items-center gap-2 shadow-md"
            >
                <Download className="w-4 h-4 text-[#E87532]" />
                Download Menu PDF
            </button>
            <button
                type="button"
                onClick={handlePrint}
                className="px-5 py-2.5 rounded-xl bg-[#151311] border border-[#39332F] text-[#F8F3EC] hover:border-[#E87532] hover:text-[#E87532] transition-all duration-300 text-xs font-semibold flex items-center gap-2 shadow-md"
            >
                <Printer className="w-4 h-4 text-[#E87532]" />
                Print Menu
            </button>
        </div>
    );
};