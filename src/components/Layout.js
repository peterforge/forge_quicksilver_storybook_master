import React from 'react'
import './Sidebar.css'


function Sidebar (props) {
  return (
<div class="container">
<div class="grid-row">
  <div class="grid-item">
    <a class="wrapping-link" href="https://thecodeteam.com/projects/rex-ray/"></a>
    <div class="grid-item-wrapper">
      <div class="grid-item-container">
        <div class="grid-image-top rex-ray">
          <span class="centered project-image-bg rex-ray-image"></span>
        </div>
        <div class="grid-item-content">
          <span class="item-title">REX-Ray</span>
          <span class="item-category">Infrastructure as Code</span>
          <span class="item-excerpt">REX-Ray is a container storage orchestration engine enabling persistence fo...</span>
          <span class="more-info">View Project <i class="fas fa-long-arrow-alt-right"></i></span>
        </div>
      </div>
    </div>
  </div>
  <div class="grid-item">
    <a class="wrapping-link" href="https://www.dell.com/learn/us/en/555/campaigns/xps-linux-laptop_us" target="_blank" rel="noreferrer"></a>	   
    <div class="grid-item-wrapper">
      <div class="grid-item-container">
        <div class="grid-image-top sputnik">
          <span class="centered project-image-bg sputnik-image"></span>
        </div>
        <div class="grid-item-content">
          <span class="item-title">Sputnik</span>
          <span class="item-category">Developer System</span>
          <span class="item-excerpt">A developer focused laptop with a pre-installed and fully support Ubuntu im...</span>
          <span class="more-info">View Project <i class="fas fa-long-arrow-alt-right"></i></span>
        </div>
      </div>
    </div>
  </div>
  <div class="grid-item">
    <a class="wrapping-link" href="https://www.edgexfoundry.org/" target="_blank" rel="noreferrer"></a>
    <div class="grid-item-wrapper">
      <div class="grid-item-container">
        <div class="grid-image-top edgex">
          <span class="centered project-image-bg edgex-image"></span>
        </div>
        <div class="grid-item-content">
          <span class="item-title">EdgeX Foundry</span>
          <span class="item-category">Internet of Things</span>
          <span class="item-excerpt">A vendor-neutral open source project building a common open framework for I...</span>
          <span class="more-info">View Project <i class="fas fa-long-arrow-alt-right"></i></span>
        </div>
      </div>
    </div>
  </div>
  <div class="grid-item">
    <a class="wrapping-link" href="https://www.openswitch.net/" target="_blank" rel="noreferrer"></a>
    <div class="grid-item-wrapper">
      <div class="grid-item-container">
        <div class="grid-image-top openswitch">
          <span class="centered project-image-bg openswitch-image"></span>
        </div>
        <div class="grid-item-content">
          <span class="item-title">OpenSwitch</span>
          <span class="item-category">Software Based Infrastructure</span>
          <span class="item-excerpt">The OpenSwitch platform is an open source, Linux-based network operating sy...</span>
          <span class="more-info">View Project <i class="fas fa-long-arrow-alt-right"></i></span>
        </div>
      </div>
    </div>
  </div>
  <div class="grid-item">
    <a class="wrapping-link" href="https://github.com/kubernetes/kubernetes/tree/master/examples/volumes/scaleio" target="_blank" rel="noreferrer"></a>
    <div class="grid-item-wrapper">
      <div class="grid-item-container">
        <div class="grid-image-top scaleio">
          <span class="centered project-image-bg scaleio-image"></span>
        </div>
        <div class="grid-item-content">
          <span class="item-title">K8s + ScaleIO</span>
          <span class="item-category">Infrastructure as Code</span>
          <span class="item-excerpt">Configure Kubernetes resources to consume storage from volumes hosted on Sc...</span>
          <span class="more-info">View Project <i class="fas fa-long-arrow-alt-right"></i></span>
        </div>
      </div>
    </div>
  </div>
  <div class="grid-item">
    <a class="wrapping-link" href="https://thecodeteam.com/projects/container-storage-interface/"></a>
    <div class="grid-item-wrapper">
      <div class="grid-item-container">
        <div class="grid-image-top csi">
          <span class="centered project-image-bg csi-image"></span>
        </div>
        <div class="grid-item-content">
          <span class="item-title">Container Storage Interface</span>
          <span class="item-category">Software Based Infrastructure</span>
          <span class="item-excerpt">A universal storage interface  allowing easy interoperability between conta...</span>
          <span class="more-info">View Project <i class="fas fa-long-arrow-alt-right"></i></span>
        </div>
      </div>
    </div>
  </div>
  <div class="grid-item">
    <a class="wrapping-link" href="https://thecodeteam.com/projects/kubernetes/"></a>
    <div class="grid-item-wrapper">
      <div class="grid-item-container">
        <div class="grid-image-top kubernetes">
          <span class="centered project-image-bg kubernetes-image"></span>
        </div>
        <div class="grid-item-content">
          <span class="item-title">Kubernetes</span>
          <span class="item-category">Software Based Infrastructure</span>
          <span class="item-excerpt">An open-source system for automating deployment, scaling, and management of...</span>
          <span class="more-info">View Project <i class="fas fa-long-arrow-alt-right"></i></span>
        </div>
      </div>
    </div>
  </div>
  <div class="grid-item">
    <a class="wrapping-link" href="https://grpc.io/" target="_blank" rel="noreferrer"></a>
    <div class="grid-item-wrapper">
      <div class="grid-item-container">
        <div class="grid-image-top grpc">
          <span class="centered project-image-bg grpc-image"></span>
        </div>
        <div class="grid-item-content">
          <span class="item-title">GRPC</span>
          <span class="item-category">Tools and Libraries</span>
          <span class="item-excerpt">A high performance, open source, general-purpose RPC framework.</span>
          <span class="more-info">View Project <i class="fas fa-long-arrow-alt-right"></i></span>
        </div>
      </div>
    </div>
  </div>
  <div class="grid-item">
    <a class="wrapping-link" href="https://thecodeteam.com/projects/envoy/"></a>
    <div class="grid-item-wrapper">
      <div class="grid-item-container">
        <div class="grid-image-top envoy">
          <span class="centered project-image-bg envoy-image"></span>
        </div>
        <div class="grid-item-content">
          <span class="item-title">Envoy</span>
          <span class="item-category">Software Based Infrastructure</span>
          <span class="item-excerpt">An open source edge and service proxy, from the developers at Lyft.</span>
          <span class="more-info">View Project <i class="fas fa-long-arrow-alt-right"></i></span>
        </div>
      </div>
    </div>
  </div>
  <div class="grid-item">
    <a class="wrapping-link" href="https://thecodeteam.com/projects/istio/"></a>
    <div class="grid-item-wrapper">
      <div class="grid-item-container">
        <div class="grid-image-top istio">
          <span class="centered project-image-bg istio-image"></span>
        </div>
        <div class="grid-item-content">
          <span class="item-title">Istio</span>
          <span class="item-category">Software Based Infrastructure</span>
          <span class="item-excerpt">Connect, secure, control, and observe services.</span>
          <span class="more-info">View Project <i class="fas fa-long-arrow-alt-right"></i></span>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
  )
}

export default Sidebar;








