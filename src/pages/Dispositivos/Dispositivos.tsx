import Style from "./Dispositivos.module.css"
import { ButtonSubmit } from "../../components/buttons/ButtonSubmit"
import { Plus } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/tables/Table"
import { devices } from "../../data/device.mock"
import { useState } from "react"
import { CardInfo } from "../../components/cards/CardInfo"

export interface Device {
    nome:string,
    modelo:string,
    IP:string
}

export const Dispositivos = () => {
    const [ deviceSelected, setDeviceSelected] = useState<Device | null>(null)

    const handleSelect = (device: Device) => {
        if (deviceSelected && deviceSelected.nome === device.nome) {
            // Se já está selecionado, desmarque (desative animação)
            setDeviceSelected(null);
        } else {
            // Caso contrário, selecione o dispositivo
            setDeviceSelected(device);
        }
    }
    

    const keysDevices = devices.length > 0 ? Object.keys(devices[0]) : []
    return (
        <>
            <div className={Style.headerDispositivos}>
                <div>
                    <h1 className={Style.title}>Dispositivos</h1>
                    <p className={Style.subtitle}>Gerencie os dispositivos cadastrados no sistema</p>
                </div>

                <ButtonSubmit icon={Plus}>Novo Dispositivo</ButtonSubmit>
            </div>

            <section className={Style.content}>
                <div className={Style.card}>
                    <h3 style={{ fontSize: "20px", marginBottom: "5px" }}>Dispositivos cadastrados </h3>

                    <Table>
                        <TableHeader>
                            <TableRow>
                                {deviceSelected && (
                                    <TableHead>
                                        <input type="checkbox" checked />
                                    </TableHead>
                                )}
                                {keysDevices.map((key) => {
                                    return <TableHead key={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</TableHead>
                                })}
                            </TableRow>
                            
                        </TableHeader>
                        <TableBody>
                            {devices.map( (device, index) => {
                                return <TableRow key={index} 
                                        onClick={() => handleSelect(device)} 
                                        {...(deviceSelected?.nome === device.nome ? {style: {backgroundColor: 'var(--secondary)'}} : {})}>
                                            {deviceSelected && (
                                                <TableCell>
                                                    <input
                                                        type="checkbox"
                                                        checked={deviceSelected?.nome === device.nome}
                                                    />
                                                </TableCell>
                                            )}
                                            <TableCell>{device.nome}</TableCell>
                                            <TableCell>{device.modelo}</TableCell>
                                            <TableCell>{device.IP}</TableCell>
                                        </TableRow> 
                            })}
                        </TableBody>
                    </Table>
                </div>

                <div className={Style.info}>
                    {deviceSelected? <CardInfo item={deviceSelected}/> : <h3>Nenhum relógio selecionado</h3>
                    }
                </div>

            </section>
        </>
    )
}